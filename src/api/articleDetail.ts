import { initMicroCms } from './axios'
import { Article } from '@/types'

export const fetchArticleDetail = async (id: string) => {
  const articleDetail = await initMicroCms()
    .get<Article>(`articles/${id}`)
    .then((res) => {
      return res.data
    })
  return articleDetail
}
