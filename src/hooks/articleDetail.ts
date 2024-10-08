import { initMicroCms } from '@/api/axios'
import { Article } from '@/types'

export const fetchArticleDetail = async (id: string): Promise<Article> => {
	// if (!id) {
	//   return {
	//     id: '',
	//     createdAt: '',
	//     updatedAt: '',
	//     publishedAt: '',
	//     revisedAt: '',
	//     title: '',
	//     content: '',
	//     draftContent: '',
	//     eyecatch: {
	//       url: '',
	//       height: 0,
	//       width: 0,
	//     },
	//     category: {
	//       id: '',
	//       createdAt: '',
	//       updatedAt: '',
	//       publishedAt: '',
	//       revisedAt: '',
	//       name: '',
	//     },
	//     isPublished: false,
	//   }
	// }
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
