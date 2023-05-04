import { Article } from '@/types'
import { FC } from 'react'
import {
  articleCard,
  articleCreatedAt,
  articleImage,
  articleImageContainer,
  articleTitle,
  articleTitleContainer
} from './styles/articleCard.css'

type ArticleCardProps = {
  article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  article.createdAt = formatCreatedAt(article.createdAt)

  return (
    <div className={articleCard}>
      <div className={articleImageContainer}>
        <img className={articleImage} src={article.eyecatch?.url} alt='' />
        <p className={articleCreatedAt}>{article.createdAt}</p>
      </div>
      <div className={articleTitleContainer}>
        <h4 className={articleTitle}>{article.title}</h4>
      </div>
    </div>
  )
}

function formatCreatedAt(createdAt: string): string {
  return createdAt.slice(0, 4) + '/' + createdAt.slice(5, 7) + '/' + createdAt.slice(8, 10)
}
