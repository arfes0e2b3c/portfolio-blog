import { initMicroCms } from '@/api/axios'

export const usePostDraft = async (
	title: string,
	content: string,
	categoryId?: string
): Promise<void> => {
	await initMicroCms()
		.post('/articles', {
			title: title,
			content: content,
			draftContent: content,
			category: categoryId,
		})
		.then(() => {
			alert('下書き保存しました')
			location.href = '/shulkssbu'
		})
		.catch((err) => {
			alert(`下書き保存に失敗しました：${err.message}`)
		})
}
