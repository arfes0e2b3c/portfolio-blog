import type { ReadArticle } from '@/types'
import { FC } from 'react'
import { ReadCard } from './elements/ReadCard'
import {
  cardList,
  emptyMessage,
  readHistoryInner,
  readHistorySubtitle,
  readHistoryTitle,
} from './styles/readHistory.css'

type Props = {
  articles: ReadArticle[]
  total: number
}

export const ReadHistory: FC<Props> = ({ articles, total }) => {
  return (
    <div className={readHistoryInner}>
      <h2 className={readHistoryTitle}>READ</h2>
      <p className={readHistorySubtitle}>
        {total > 0
          ? `${total} articles read`
          : 'No articles yet'}
      </p>

      {articles.length > 0 ? (
        <div className={cardList}>
          {articles.map((article) => (
            <ReadCard key={article.article_id} article={article} />
          ))}
        </div>
      ) : (
        <p className={emptyMessage}>No reading history found.</p>
      )}
    </div>
  )
}
