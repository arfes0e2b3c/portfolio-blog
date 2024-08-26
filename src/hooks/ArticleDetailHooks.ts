import { fetchArticleDetail } from '@/api/articleDetail'
import { Article } from '@/types'

export const UseFetchArticleDetail = async (id: string): Promise<Article> => {
	if (!id) {
		return {
			id: '',
			createdAt: '',
			updatedAt: '',
			publishedAt: '',
			revisedAt: '',
			title: '',
			content: '',
			draftContent: '',
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
			isPublished: false,
		}
	}
	const articleDetail = await fetchArticleDetail(id)
	return articleDetail
}
