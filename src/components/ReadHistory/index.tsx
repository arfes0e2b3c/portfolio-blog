import type { ReadArticle } from '@/types'
import { CATEGORY_LABELS, getCategoryLabel } from '@/constants/curriculum'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { FC, useMemo, useState } from 'react'
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
  filterRow,
  filterIndex,
  filterItem,
  filterItemSelected,
  mobileBreak,
} from './styles/readHistory.css'

type Props = {
  articles: ReadArticle[]
  total: number
  currentStreak: number
  maxStreak: number
}

export const ReadHistory: FC<Props> = ({ articles, total, currentStreak, maxStreak }) => {
  const [selectedCategory, setSelectedCategory] = useState({ index: 0, id: '' })

  // 記事に存在するカテゴリだけ抽出（順序はCATEGORY_LABELSの定義順）
  const categories = useMemo(() => {
    const existing = new Set(articles.map((a) => a.category).filter(Boolean))
    return Object.keys(CATEGORY_LABELS).filter((key) => existing.has(key))
  }, [articles])

  const filtered = selectedCategory.id
    ? articles.filter((a) => a.category === selectedCategory.id)
    : articles

  return (
    <div className={readHistoryInner}>
      <h2 className={readHistoryTitle}>READ</h2>
      {total > 0 && (
        <div className={statsRow}>
          <div className={statItem}>
            <span className={statValue}>{total}</span>
            <span className={statLabel}>Total<br className={mobileBreak} /> Read</span>
          </div>
          <div className={statItem}>
            <span className={statValue}>{currentStreak}</span>
            <span className={statLabel}>Current<br className={mobileBreak} /> Streak</span>
          </div>
          <div className={statItem}>
            <span className={statValue}>{maxStreak}</span>
            <span className={statLabel}>Best<br className={mobileBreak} /> Streak</span>
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <ul
          className={filterRow}
          style={assignInlineVars({ [filterIndex]: selectedCategory.index.toString() })}
        >
          <li
            className={[filterItem, selectedCategory.id === '' ? filterItemSelected : ''].join(' ')}
            onClick={() => setSelectedCategory({ index: 0, id: '' })}
          >
            All
          </li>
          {categories.map((cat, i) => (
            <li
              key={cat}
              className={[filterItem, selectedCategory.id === cat ? filterItemSelected : ''].join(' ')}
              onClick={() => setSelectedCategory({ index: i + 1, id: cat })}
            >
              {getCategoryLabel(cat)}
            </li>
          ))}
        </ul>
      )}

      {filtered.length > 0 ? (
        <div className={cardList}>
          {filtered.map((article) => (
            <ReadCard key={article.article_id} article={article} />
          ))}
        </div>
      ) : (
        <p className={emptyMessage}>No reading history found.</p>
      )}
    </div>
  )
}
