import { fetchArticleListAdmin } from '@/api/articleListAdmin'
import { ArticleResponse } from '@/types'

export const UseFetchArticleListAdmin = async (): Promise<ArticleResponse> => {
  const articleList = await fetchArticleListAdmin()

  return articleList
}
