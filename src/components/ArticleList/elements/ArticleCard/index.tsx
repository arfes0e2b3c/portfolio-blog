import { Article } from '@/types'
import { FC } from 'react'

type ArticleCardProps = {
  article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  article.createdAt = formatCreatedAt(article.createdAt)

  return (
    <div>
      <div>
        <div>
          <p>{article.createdAt}</p>
        </div>
        <img src={article.eyecatch?.url} alt='' />
      </div>
      <div>
        <h4>{article.title}</h4>
      </div>
    </div>
  )
}
