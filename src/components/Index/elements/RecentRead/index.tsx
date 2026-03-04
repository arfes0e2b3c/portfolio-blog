import type { ReadArticle } from '@/types'
import { getCategoryLabel } from '@/constants/curriculum'
import Link from 'next/link'
import {
  linkContainer,
  readCategory,
  readDate,
  readItem,
  readLink,
  readList,
  readTitle,
  recentRead,
  sectionTitle,
} from './styles/recentRead.css'

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export const RecentRead = (props: { articles: ReadArticle[] }) => {
  const articles = props.articles.slice(0, 3)
  if (articles.length === 0) return null

  return (
    <section className={recentRead}>
      <h2 className={sectionTitle}>RECENT READ</h2>
      <div className={readList}>
        {articles.map((article) => (
          <a
            key={article.article_id}
            className={readItem}
            href={article.article_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className={readDate}>
              {formatDate(article.delivered_at ?? article.read_at)}
            </span>
            <span className={readTitle}>{article.article_title}</span>
            {article.category && (
              <span className={readCategory}>
                {getCategoryLabel(article.category)}
              </span>
            )}
          </a>
        ))}
      </div>
      <div className={linkContainer}>
        <Link className={readLink} href='/read'>
          All READ
        </Link>
      </div>
    </section>
  )
}
