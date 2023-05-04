import { initMicroCms } from '@/api/axios'
import { Blog, BlogResponse } from '@/types'

export const useFetchArticleList = async (): Promise<BlogResponse> => {
  const articleList = await initMicroCms()
    .get<BlogResponse>('blogs')
    .then((res) => {
      return res.data
    })

  return articleList
}
