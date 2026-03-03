import type { ReadArticle } from '@/types'
import { FC } from 'react'
import { ReadCard } from './elements/ReadCard'
import {
  cardList,
  emptyMessage,
  readHistoryInner,
  readHistoryTitle,
  statsRow,
  statItem,
  statValue,
  statLabel,
} from './styles/readHistory.css'

type Props = {
  articles: ReadArticle[]
  total: number
  currentStreak: number
  maxStreak: number
}

export const ReadHistory: FC<Props> = ({ articles, total, currentStreak, maxStreak }) => {
  return (
    <div className={readHistoryInner}>
      <h2 className={readHistoryTitle}>READ</h2>
      {total > 0 && (
        <div className={statsRow}>
          <div className={statItem}>
            <span className={statValue}>{total}</span>
            <span className={statLabel}>Total Read</span>
          </div>
          <div className={statItem}>
            <span className={statValue}>{currentStreak}</span>
            <span className={statLabel}>Current Streak</span>
          </div>
          <div className={statItem}>
            <span className={statValue}>{maxStreak}</span>
            <span className={statLabel}>Best Streak</span>
          </div>
        </div>
      )}

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
