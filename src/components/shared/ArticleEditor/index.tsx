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

import { Oval } from 'react-loader-spinner'

const notoSansJp = Noto_Sans_JP({
  weight: '300',
  subsets: ['latin'],
})

export const ArticleEditor = (props: {
  funcDraft: (title: string, draftContent: string, id?: string) => Promise<void>
  funcArticle: (title: string, content: string, id?: string) => Promise<void>
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
  const debouncedContent = useDebounce(draftContent, 500)

  const saveDraft = useCallback(async () => {
    setIsSaving(true)
    try {
      await props.funcDraft(title, draftContent, props.id)
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
  }, [props, title, draftContent])
  const saveArticle = useCallback(async () => {
    setIsSaving(true)
    try {
      await props.funcArticle(title, draftContent, props.id)
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
  }, [props, title, draftContent])
  useEffect(() => {
    const interval = setInterval(saveDraft, 60000)

    return () => clearInterval(interval)
  }, [draftContent, isEdited, props.funcDraft, title, saveDraft])

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
                width={20}
                height={20}
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
                width={20}
                height={20}
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
        ></textarea>
      </div>
    </>
  )
}
