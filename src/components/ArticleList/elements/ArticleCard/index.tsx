import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {
  articleCard,
  articleCreatedAt,
  articleImage,
  articleImageContainer,
  articleTitle,
  articleTitleContainer,
} from './styles/articleCard.css'
import { Article } from '@/types'
import { formatTime2Ymd } from '@/utils/function'

type ArticleCardProps = {
  article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  article.createdAt = formatTime2Ymd(article.createdAt)

  return (
    <Link href={`article/${article.id}`} className={articleCard}>
      <div className={articleImageContainer}>
        <Image
          className={articleImage}
          src={article.eyecatch?.url ?? ''}
          alt=''
          width={1200}
          height={630}
        />
        <p className={articleCreatedAt}>{article.createdAt}</p>
      </div>
      <div className={articleTitleContainer}>
        <h4 className={articleTitle}>{article.title}</h4>
      </div>
    </Link>
  )
}
