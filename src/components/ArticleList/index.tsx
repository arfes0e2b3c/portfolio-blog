import { useQuery } from 'react-query'
import { ArticleCard } from './elements/ArticleCard'
import {
  articleListContainer,
  articleListInner,
  articleListTitle,
  categoryList,
  categoryListItem,
  selected,
} from './styles/articleList.css'
import { UseFetchArticleList } from '@/hooks/articleListHooks'
import { Article, ArticleResponse } from '@/types'
import { UseFetchCategories } from '@/hooks/categoryListHooks'
import { useState } from 'react'

export const ArticleList = (props: { articleList: ArticleResponse }) => {
  const [categoryId, setCategoryId] = useState('')
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
  const articleList = result && result.contents
  if (isLoading || isLoadingCategories) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error fetching articles</span>
  }

  const filteredArticleList =
    categoryId === ''
      ? { articleList }
      : {
          articleList: articleList?.filter((article) => article?.category?.id === categoryId),
        }

  return (
    <div className={articleListInner}>
      <h2 className={articleListTitle}>ARTICLE</h2>
      <div>
        <ul className={categoryList}>
          <li
            className={[categoryListItem, categoryId === '' ? selected : ''].join(' ')}
            onClick={() => setCategoryId('')}
          >
            全て
          </li>
          {categories?.contents?.map((category) => {
            return (
              <li
                className={[categoryListItem, categoryId === category.id ? selected : ''].join(' ')}
                key={category.id}
                onClick={() => setCategoryId(category.id)}
              >
                {category.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div className={articleListContainer}>
        {filteredArticleList?.articleList?.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
