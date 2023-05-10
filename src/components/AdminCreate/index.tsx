import { ArticleEditor } from '../shared/ArticleEditor'
import { usePostArticle } from './hooks/usePostArticleHooks'
import { usePostDraft } from './hooks/usePostDraftHooks'
import {
  adminCreate,
  adminCreateHeader,
  adminCreateInner,
  adminCreateTitle,
} from './styles/adminCreate.css'

export const AdminCreate = () => {
  return (
    <section className={adminCreate}>
      <div className={adminCreateInner}>
        <div className={adminCreateHeader}>
          <h2 className={adminCreateTitle}>新規記事作成</h2>
        </div>
        <ArticleEditor postDraft={usePostDraft} postArticle={usePostArticle} />
      </div>
    </section>
  )
}
