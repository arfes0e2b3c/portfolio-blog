import { fetchArticleList } from '@/api/articleList'
import { ArticleResponse } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ArticleResponse>) {
  const articleList = await fetchArticleList()
  res.status(200).json(articleList)
}
