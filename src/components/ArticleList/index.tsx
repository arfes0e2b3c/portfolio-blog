import { Article, ArticleResponse } from '@/types'
import { useFetchArticleList } from '@/components/ArticleList/hooks/articleListHooks'
import { useQuery } from 'react-query'
import { ArticleCard } from './elements/ArticleCard'
import { FC } from 'react'
import { articleListContainer, articleListInner, articleListTitle } from './styles/articleList.css'

export const fetchArticleList = async (): Promise<ArticleResponse> => {
  const articleList = await useFetchArticleList()

  return articleList
}

export const ArticleList: FC = () => {
  const {
    data: result,
    isLoading,
    isError,
  } = useQuery('articles', fetchArticleList, {
    refetchOnWindowFocus: false,
  })
  const articleList = result && result.contents
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error fetching articles</span>
  }

  return (
    <div className={articleListInner}>
      <h2 className={articleListTitle}>ARTICLE</h2>
      <div className={articleListContainer}>
        {articleList?.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
