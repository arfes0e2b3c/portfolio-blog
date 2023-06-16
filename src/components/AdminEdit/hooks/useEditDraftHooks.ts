import { initMicroCms } from '@/api/axios'

export const useEditDraft = async (
  title: string,
  draftContent: string,
  id?: string
): Promise<void> => {
  await initMicroCms()
    .patch(`/articles/${id}`, {
      title: title,
      draftContent: draftContent,
    })
    .then(() => {
      alert('下書き保存しました')
    })
    .catch((err) => {
      alert('下書き保存に失敗しました：' + err.message)
    })
}
