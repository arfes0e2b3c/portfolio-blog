import Link from 'next/link'
import { UseDeleteArticle } from './hooks/deleteArticleHooks'
import {
  articleButtonContainer,
  articleCard,
  articleCardInner,
  articleDeleteButton,
  articleEditButton,
  articleId,
  articlePublishedAt,
  articleTitle,
  articleUpdatedAt,
  isDisabled,
  isDraft,
} from './styles/articleCard.css'
import { Article } from '@/types'
import { formatTime2Ymd } from '@/utils/function'

export const ArticleCard = (props: { article: Article; index: number; refetch: () => void }) => {
  const deleteArticle = async (id: string): Promise<void> => {
    const res = await UseDeleteArticle(id)
    if (res === '202') {
      props.refetch()
    }
  }
  const article = props.article
  article.publishedAt = formatTime2Ymd(article.publishedAt)
  article.updatedAt = formatTime2Ymd(article.updatedAt)
  const index = props.index + 1
  return (
    <li className={[articleCard, article.isPublished ? '' : isDraft].join(' ')}>
      <div className={articleCardInner}>
        <p className={articleId}>{index}</p>
        <p className={articleTitle}>{article.title}</p>
        <p className={articlePublishedAt}>{article.publishedAt}</p>
        <p className={articleUpdatedAt}>{article.updatedAt}</p>
        <div className={articleButtonContainer}>
          <Link className={articleEditButton} href={`/admin/edit/${article.id}`}>
            編集
          </Link>
        </div>
        <div className={articleButtonContainer}>
          <Link className={[articleEditButton, article.isPublished ? '' : isDisabled].join(' ')} href={`/article/${article.id}`}>
            記事
          </Link>
        </div>
        <div className={articleButtonContainer}>
          <button className={articleDeleteButton} onClick={() => deleteArticle(article.id)}>
            削除
          </button>
        </div>
      </div>
    </li>
  )
}
