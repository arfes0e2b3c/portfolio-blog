import { fetchArticleList } from '@/api/articleList'
import { ArticleResponse } from '@/types'

export const UseFetchArticleList = async (): Promise<ArticleResponse> => {
  const articleList = await fetchArticleList()

  return articleList
}
