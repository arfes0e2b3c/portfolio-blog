import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ArticleEditor } from '../shared/ArticleEditor'
import { useEditArticle } from './hooks/useEditArticleHooks'
import { useEditDraft } from './hooks/useEditDraftHooks'
import { adminEdit, adminEditHeader, adminEditInner, adminEditTitle } from './styles/adminEdit.css'
import { usefetchArticleDetail } from '@/hooks/ArticleDetailHooks'

const fetchArticleDetail = async (id: string) => {
  const articleDetail = await usefetchArticleDetail(id)
  return articleDetail
}
export const AdminEdit = () => {
  const router = useRouter()
  // const id = useMemo(() => {
  //   console.log(router.query.id)

  //   return Array.isArray(router.query.id) ? router.query.id[0] : router.query.id ?? ''
  // }, [router])
  // console.log(id)
  const id = window.location.href.split('edit/')[0]

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery(
    'edit',
    () => {
      // console.log(router)
      fetchArticleDetail(id)
    },
    {
      refetchOnWindowFocus: false,
    }
  )
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError || !result) {
    return <span>Error fetching articles</span>
  }
  console.log(result)
  const articleDetail = result

  return (
    <section className={adminEdit}>
      <div className={adminEditInner}>
        <div className={adminEditHeader}>
          <h2 className={adminEditTitle}>記事編集</h2>
        </div>
        <ArticleEditor
          funcDraft={useEditDraft}
          funcArticle={useEditArticle}
          id={articleDetail.id}
          title={articleDetail.title}
          content={articleDetail.content}
        />
      </div>
    </section>
  )
}
