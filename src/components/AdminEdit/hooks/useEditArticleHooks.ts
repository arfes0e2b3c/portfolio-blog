import { initMicroCms } from '@/api/axios'

export const useEditArticle = async (
	title: string,
	content: string,
	categoryId?: string,
	id?: string
): Promise<void> => {
	if (confirm('記事を更新してよろしいですか？')) {
		await initMicroCms().patch(`/articles/${id}`, {
			title: title,
			content: content,
			draftContent: content,
			isPublished: true,
			category: categoryId,
		})
	} else {
		alert('キャンセルしました')
	}
}
