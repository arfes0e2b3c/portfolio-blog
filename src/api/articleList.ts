import { ArticleResponse } from '@/types'
import { initMicroCms } from './axios'

export const fetchArticleList = async () => {
	const articleList = await initMicroCms()
		.get<ArticleResponse>('articles?filters=isPublished[equals]true&limit=100')
		.then((res) => {
			return res.data
		})

	return articleList
}
