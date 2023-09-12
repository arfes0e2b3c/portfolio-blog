import Link from 'next/link'
import { ArticleEditor } from '../shared/ArticleEditor'
import { usePostArticle } from './hooks/usePostArticleHooks'
import { usePostDraft } from './hooks/usePostDraftHooks'
import {
  adminCreate,
  adminCreateHeader,
  adminCreateInner,
  adminCreateTitle,
  linkToAdminPage,
} from './styles/adminCreate.css'

export const AdminCreate = () => {
  return (
    <section className={adminCreate}>
      <div className={adminCreateInner}>
        <div className={adminCreateHeader}>
          <div>
            <Link className={linkToAdminPage} href={'/shulkssbu'}>
              &lt; 記事一覧
            </Link>
          </div>
          <div>
            <h2 className={adminCreateTitle}>新規記事作成</h2>
          </div>
        </div>
        <ArticleEditor funcDraft={usePostDraft} funcArticle={usePostArticle} />
      </div>
    </section>
  )
}
