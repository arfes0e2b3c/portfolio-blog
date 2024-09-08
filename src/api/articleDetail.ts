import { Article } from '@/types'
import { initMicroCms } from './axios'

export const fetchArticleDetail = async (id: string) => {
	const articleDetail = await initMicroCms()
		.get<Article>(`articles/${id}`)
		.then((res) => {
			return res.data
		})
	return articleDetail
}
