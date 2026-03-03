import type { ReadArticle } from '@/types'
import { getCategoryLabel } from '@/constants/curriculum'
import { FC } from 'react'
import {
  arrow,
  card,
  cardHeader,
  feedbackBadge,
  noteContainer,
  noteText,
  readDate,
  titleLink,
  topicList,
  topicTag,
  categoryTag,
} from './styles/readCard.css'

const feedbackMap: Record<string, { emoji: string; label: string }> = {
  interesting: { emoji: '\u{1F44D}', label: 'Interesting' },
  not_understood: { emoji: '\u{1F914}', label: 'Need Review' },
  boring: { emoji: '\u{1F610}', label: 'Skipped' },
  want_more: { emoji: '\u{1F525}', label: 'Want More' },
  partial_read: { emoji: '\u{1F4D6}', label: 'Partial' },
  other: { emoji: '\u{1F4AC}', label: 'Note' },
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

type Props = {
  article: ReadArticle
}

export const ReadCard: FC<Props> = ({ article }) => {
  const fb = feedbackMap[article.feedback_type] ?? feedbackMap.other

  return (
    <a
      className={card}
      href={article.article_url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={cardHeader}>
        <span className={readDate}>{formatDate(article.delivered_at ?? article.read_at)}</span>
        <span className={feedbackBadge}>
          {fb.emoji} {fb.label}
        </span>
      </div>

      <span className={titleLink}>
        {article.article_title}
        <span className={arrow}>&rarr;</span>
      </span>

      {article.topics.length > 0 && (
        <div className={topicList}>
          {article.topics.map((topic) => (
            <span className={topicTag} key={topic}>
              {article.category ? `${getCategoryLabel(article.category)} > ${topic}` : topic}
            </span>
          ))}
        </div>
      )}

      {article.user_comment && (
        <div className={noteContainer}>
          <p className={noteText}>{article.user_comment}</p>
        </div>
      )}
    </a>
  )
}
