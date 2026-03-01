import type { ReadArticleResponse } from '@/types'

export const fetchReadArticles = async (): Promise<ReadArticleResponse> => {
  const url = process.env.READ_ARTICLE_API_URL
  const key = process.env.READ_ARTICLE_API_KEY
  console.log(`[readHistory] url=${url ? url : 'NOT SET'}, key=${key ? 'SET' : 'NOT SET'}`)

  if (!url || !key) {
    console.log('[readHistory] env vars missing, returning empty')
    return { articles: [], total: 0 }
  }

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${key}` },
  })

  console.log(`[readHistory] response status=${res.status}`)

  if (!res.ok) {
    const body = await res.text()
    console.error(`[readHistory] fetch failed: ${res.status} body=${body}`)
    return { articles: [], total: 0 }
  }

  const data = (await res.json()) as ReadArticleResponse
  console.log(`[readHistory] fetched ${data.articles.length} articles, total=${data.total}`)
  return data
}
