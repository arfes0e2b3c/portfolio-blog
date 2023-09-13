import { initMicroCms } from '@/api/axios'

export const useEditArticle = async (
  title: string,
  content: string,
  id?: string
): Promise<void> => {
  if (confirm('記事を更新してよろしいですか？')) {
    await initMicroCms()
      .patch(`/articles/${id}`, {
        title: title,
        content: content,
        draftContent: content,
        isPublished: true,
      })
      .then((res) => {
        alert('記事を更新しました')
      })
      .catch((err) => {
        alert('記事の更新に失敗しました：' + err.message)
      })
  } else {
    alert('キャンセルしました')
  }
}
