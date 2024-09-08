import { UseFetchArticleList } from '@/hooks/articleListHooks'
import { UseFetchCategories } from '@/hooks/categoryListHooks'
import { Article, ArticleResponse } from '@/types'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { ArticleCard } from './elements/ArticleCard'
import { CategoryList } from './elements/CategoryList'
import {
	articleListContainer,
	articleListInner,
	articleListTitle,
} from './styles/articleList.css'

export const ArticleList = (props: { articleList: ArticleResponse }) => {
	const [selectedCategory, setSelectedCategory] = useState({ index: 0, id: '' })
	const {
		data: result,
		isLoading,
		isError,
	} = useQuery('user-articles', UseFetchArticleList, {
		refetchOnWindowFocus: false,
		initialData: props.articleList,
	})
	const {
		data: categories,
		isLoading: isLoadingCategories,
		isError: isErrorCategories,
	} = useQuery('categories', UseFetchCategories, {
		refetchOnWindowFocus: false,
	})
	const articleList = result?.contents
	if (isLoading || isLoadingCategories) {
		return <span>Loading...</span>
	}

	if (isError) {
		return <span>Error fetching articles</span>
	}

	const filteredArticleList =
		selectedCategory.id === ''
			? { articleList }
			: {
					articleList: articleList?.filter(
						(article) => article?.category?.id === selectedCategory.id
					),
				}

	return (
		<div className={articleListInner}>
			<h2 className={articleListTitle}>ARTICLE</h2>
			<CategoryList
				categories={categories ?? { contents: [] }}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div className={articleListContainer}>
				{filteredArticleList?.articleList?.map((article: Article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</div>
	)
}
