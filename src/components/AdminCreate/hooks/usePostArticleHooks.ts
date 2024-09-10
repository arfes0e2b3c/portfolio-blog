import { initMicroCms } from '@/api/axios'

export const usePostArticle = async (
	title: string,
	content: string,
	categoryId?: string
): Promise<void> => {
	if (confirm('記事を公開してよろしいですか？')) {
		await initMicroCms()
			.post('/articles', {
				title: title,
				content: content,
				draftContent: content,
				isPublished: true,
				category: categoryId,
			})
			.then(() => {
				alert('記事を公開しました')
			})
			.catch((err) => {
				alert(`記事の公開に失敗しました：${err.message}`)
			})
	} else {
		alert('キャンセルしました')
	}
}
