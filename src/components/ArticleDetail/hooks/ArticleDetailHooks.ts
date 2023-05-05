import { initMicroCms } from '@/api/axios'
import { Article } from '@/types'

export const usefetchArticleDetail = async (id: string): Promise<Article> => {
  if (!id) {
    return {
      id: '',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      revisedAt: '',
      title: '',
      content: '',
      eyecatch: {
        url: '',
        height: 0,
        width: 0,
      },
      category: {
        id: '',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        name: '',
      },
    }
  }
  const articleDetail = await initMicroCms()
    .get<Article>(`articles/${id}`)
    .then((res) => {
      return res.data
    })
  return articleDetail
}