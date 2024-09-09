import { Noto_Sans_JP } from 'next/font/google'
import { useCallback, useEffect, useState } from 'react'
import { MarkdownResult } from './elements/Markdown'
import { useDebounce } from './hooks/useDebounce'
import {
	buttonContainer,
	editorContainer,
	editorHeader,
	editorTextarea,
	isError,
	isSuccess,
	publishButton,
	saveDraftButton,
	titleInput,
} from './styles/articleEditor.css'

import { PageType, PageTypeUnion } from '@/const'
import { UseFetchCategories } from '@/hooks/categoryListHooks'
import { Oval } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { CategoryList } from '../CategoryList'

const notoSansJp = Noto_Sans_JP({
	weight: '300',
	subsets: ['latin'],
})

export const ArticleEditor = (props: {
	funcDraft: (
		title: string,
		draftContent: string,
		categoryId?: string,
		articleId?: string
	) => Promise<void>
	funcArticle: (
		title: string,
		content: string,
		categoryId?: string,
		articleId?: string
	) => Promise<void>
	pageType: PageTypeUnion
	id?: string
	title?: string
	draftContent?: string
}) => {
	const [title, setTitle] = useState(props.title ?? '')
	const [draftContent, setDraftContent] = useState(props.draftContent ?? '')
	const [isEdited, setIsEdited] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [isShowDraftSuccess, setIsShowDraftSuccess] = useState(false)
	const [isShowDraftError, setIsShowDraftError] = useState(false)
	const [isShowArticleSuccess, setIsShowArticleSuccess] = useState(false)
	const [isShowArticleError, setIsShowArticleError] = useState(false)
	const [categoryId, setCategoryId] = useState('')
	const debouncedContent = useDebounce(draftContent, 500)

	const onClickCategoryItem = (categoryId: string) => {
		setCategoryId(categoryId)
		setIsEdited(true)
	}

	const saveDraft = useCallback(async () => {
		if (!isEdited) return
		setIsSaving(true)
		try {
			await props.funcDraft(title, draftContent, categoryId, props.id)
			setIsSaving(false)
			setIsEdited(false)
			setIsShowDraftSuccess(true)
			setTimeout(() => {
				setIsShowDraftSuccess(false)
			}, 3000)
		} catch (error) {
			setIsSaving(false)
			setIsShowDraftError(true)
			setTimeout(() => {
				setIsShowDraftError(false)
			}, 3000)
		}
	}, [props, title, draftContent, categoryId, isEdited])
	const saveArticle = useCallback(async () => {
		setIsSaving(true)
		try {
			await props.funcArticle(title, draftContent, categoryId, props.id)
			setIsSaving(false)
			setIsEdited(false)
			setIsShowArticleSuccess(true)
			setTimeout(() => {
				setIsShowArticleSuccess(false)
			}, 3000)
		} catch (error) {
			setIsSaving(false)
			setIsShowArticleError(true)
			setTimeout(() => {
				setIsShowArticleError(false)
			}, 3000)
		}
	}, [props, title, draftContent, categoryId])

	const {
		data: categories,
		isLoading: isLoadingCategories,
		isError: isErrorCategories,
	} = useQuery('categories', UseFetchCategories, {
		refetchOnWindowFocus: false,
	})

	useEffect(() => {
		if (props.pageType === PageType.create) return
		const interval = setInterval(saveDraft, 60000)
		return () => clearInterval(interval)
	}, [saveDraft, props.pageType])

	return (
		<>
			<div className={editorHeader}>
				<input
					className={[titleInput, notoSansJp.className].join(' ')}
					name='title'
					type='text'
					value={title}
					placeholder='タイトル'
					spellCheck='false'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className={buttonContainer}>
					<button
						type='button'
						className={[
							saveDraftButton,
							isShowDraftSuccess ? isSuccess : '',
							isShowDraftError ? isError : '',
						].join(' ')}
						onClick={() => saveDraft()}
					>
						{isSaving ? (
							<Oval
								strokeWidth={3}
								width={30}
								height={30}
								color='#888'
								secondaryColor='#eee'
								ariaLabel='loading'
							/>
						) : isShowDraftSuccess ? (
							'成功'
						) : isShowDraftError ? (
							'失敗'
						) : (
							'下書き保存'
						)}
					</button>
					<button
						type='button'
						className={[
							publishButton,
							isShowArticleSuccess ? isSuccess : '',
							isShowArticleError ? isError : '',
						].join(' ')}
						onClick={() => saveArticle()}
					>
						{isSaving ? (
							<Oval
								strokeWidth={3}
								width={30}
								height={30}
								color='#888'
								secondaryColor='#eee'
								ariaLabel='loading'
							/>
						) : isShowArticleSuccess ? (
							'成功'
						) : isShowArticleError ? (
							'失敗'
						) : (
							'公開'
						)}
					</button>
				</div>
			</div>
			<div className={editorContainer}>
				<MarkdownResult markdownContent={debouncedContent} />
				<textarea
					className={editorTextarea}
					id=''
					cols={30}
					rows={30}
					defaultValue={props.draftContent}
					onChange={(e) => {
						setDraftContent(e.target.value)
						setIsEdited(true)
					}}
					placeholder='ここに本文を書いてください'
					spellCheck='false'
				/>
			</div>
			<CategoryList
				categories={categories?.contents ?? []}
				onClick={onClickCategoryItem}
			/>
		</>
	)
}
