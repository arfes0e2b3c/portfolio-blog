import { ArticleResponse } from '@/types'

export const UseFetchArticleList = async (): Promise<ArticleResponse> => {
  const articleList = await fetch('/api/article/list')

  return articleList.json()
}
