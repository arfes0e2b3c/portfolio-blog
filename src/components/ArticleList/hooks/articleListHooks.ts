import { initMicroCms } from '@/api/axios'
import { Article, ArticleResponse } from '@/types'

export const useFetchArticleList = async (): Promise<ArticleResponse> => {
  const articleList = await initMicroCms()
    .get<ArticleResponse>('articles')
    .then((res) => {
      return res.data
    })

  return articleList
}
