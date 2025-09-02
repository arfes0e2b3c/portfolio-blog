import { Article } from '@/types'
import { formatTime2Ymd } from '@/utils/function'
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
  externalBadge,
} from './styles/articleCard.css'

type ArticleCardProps = {
  article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  article.publishedAt = formatTime2Ymd(article.publishedAt)

  const isExternal = article.isExternal && !!article.externalUrl
  const href = isExternal ? article.externalUrl! : `article/${article.id}`
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Link href={href} className={articleCard} {...linkProps}>
      <div className={articleImageContainer}>
        <Image
          className={articleImage}
          src={article.eyecatch?.url ?? ''}
          alt=''
          width={1200}
          height={630}
        />
        <p className={articleCreatedAt}>{article.publishedAt}</p>
        {isExternal && (
          <span className={externalBadge}>
            {article.externalSource ? article.externalSource : '外部'}
          </span>
        )}
      </div>
      <div className={articleTitleContainer}>
        <h4 className={articleTitle}>{article.title}</h4>
      </div>
    </Link>
  )
}
