import { initMicroCms } from '@/api/axios'

export const useEditDraft = async (
  title: string,
  draftContent: string,
  id?: string
): Promise<void> => {
  await initMicroCms().patch(`/articles/${id}`, {
    title: title,
    draftContent: draftContent,
  })
}
