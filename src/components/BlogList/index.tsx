import { Blog, BlogResponse } from '@/types'
import { useFetchArticleList } from '@/components/BlogList/hooks/articleListHooks'
import { useQuery } from 'react-query'

export const fetchArticleList = async (): Promise<BlogResponse> => {
  const articleList = await useFetchArticleList()

  return articleList
}

export const BlogList = () => {
  const {
    data: result,
    isLoading,
    isError
  } = useQuery('articles', fetchArticleList, {
    refetchOnWindowFocus: false
  })
  const articleList = result && result.contents
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error fetching articles</span>
  }

  return (
    <div>
      {articleList?.map((article: Blog) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  )
}
