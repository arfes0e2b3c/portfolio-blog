import { initMicroCms } from '@/api/axios'

export const UseDeleteArticle = async (id: string): Promise<string> => {
  let status: string = ''
  if (confirm('本当に記事を削除しますか？')) {
    const deleteResult = await initMicroCms()
      .delete(`articles/${id}`)
      .then((res) => {
        alert('削除に成功しました')
        status = '202'
      })
      .catch((err) => {
        alert('削除に失敗しました：' + err.message)
        status = err.response.status ?? '444'
      })
  } else {
    alert('キャンセルしました')
    status = '000'
  }
  return status
}
