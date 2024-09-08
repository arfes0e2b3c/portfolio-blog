import { ArticleResponse } from '@/types'
import { initMicroCms } from './axios'

export const fetchArticleListAdmin = async () => {
	const articleList = await initMicroCms()
		.get<ArticleResponse>('articles?limit=100')
		.then((res) => {
			return res.data
		})

	return articleList
}
