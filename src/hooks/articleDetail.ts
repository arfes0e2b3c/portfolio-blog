import { initMicroCms } from '@/api/axios'
import { Article } from '@/types'

export const fetchArticleDetail = async (id: string): Promise<Article> => {
  const articleDetail = await initMicroCms()
    .get<Article>(`articles/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
      return err
    })
  return articleDetail
}
