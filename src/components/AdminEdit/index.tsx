import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ArticleEditor } from '../shared/ArticleEditor'
import { useEditArticle } from './hooks/useEditArticleHooks'
import { useEditDraft } from './hooks/useEditDraftHooks'
import { adminEdit, adminEditHeader, adminEditInner, adminEditTitle } from './styles/adminEdit.css'
import { fetchArticleDetail } from '@/hooks/articleDetail'
import { Article } from '@/types'

export const AdminEdit = (props: { article: Article }) => {
  const router = useRouter()
  const id = useMemo(() => {
    return Array.isArray(router.query.id) ? router.query.id[0] : router.query.id ?? ''
  }, [router])

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery(
    'edit',
    async () => {
      return await fetchArticleDetail(id)
    },
    {
      refetchOnWindowFocus: false,
      initialData: props.article,
    }
  )
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError || !result) {
    return <span>Error fetching articles</span>
  }

  return (
    <section className={adminEdit}>
      <div className={adminEditInner}>
        <div className={adminEditHeader}>
          <h2 className={adminEditTitle}>記事編集</h2>
        </div>
        <ArticleEditor
          funcDraft={useEditDraft}
          funcArticle={useEditArticle}
          id={result?.id}
          title={result?.title}
          content={result?.content}
        />
      </div>
    </section>
  )
}