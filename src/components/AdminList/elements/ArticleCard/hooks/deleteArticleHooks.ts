import { initMicroCms } from '@/api/axios'

export const UseDeleteArticle = async (id: string) => {
  if (confirm('本当に記事を削除しますか？')) {
    const deleteResult = await initMicroCms()
      .delete(`articles/${id}`)
      .then((res) => {
        alert('削除に成功しました')
      })
      .catch((err) => {
        alert('削除に失敗しました：' + err.message)
      })
  } else {
    alert('キャンセルしました')
  }
}
