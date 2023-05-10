import { initMicroCms } from '@/api/axios'

export const useEditDraft = async (title: string, content: string): Promise<void> => {
  await initMicroCms()
    .patch('/articles', {
      title: title,
      content: content,
      draftContent: content,
    })
    .then(() => {
      alert('下書き保存しました')
    })
    .catch((err) => {
      alert('下書き保存に失敗しました：' + err.message)
    })
}
