import { useQuery } from 'react-query'
import { ArticleCard } from './elements/ArticleCard'
import { articleListContainer, articleListInner, articleListTitle } from './styles/articleList.css'
import { UseFetchArticleList } from '@/hooks/articleListHooks'
import { Article, ArticleResponse } from '@/types'

export const ArticleList = (props: { articleList: ArticleResponse }) => {
  const {
    data: result,
    isLoading,
    isError,
  } = useQuery('user-articles', UseFetchArticleList, {
    refetchOnWindowFocus: false,
    initialData: props.articleList,
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
