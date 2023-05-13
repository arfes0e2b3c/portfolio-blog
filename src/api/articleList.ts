import { initMicroCms } from './axios'
import { ArticleResponse } from '@/types'

export const fetchArticleList = async () => {
  const articleList = await initMicroCms()
    .get<ArticleResponse>('articles')
    .then((res) => {
      return res.data
    })

  return articleList
}
