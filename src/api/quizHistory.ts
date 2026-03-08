import type { QuizHistoryResponse, QuizDetailResponse } from '@/types'

const getEnv = () => ({
  url: process.env.READ_ARTICLE_API_URL?.replace('/api/read-articles', '') ?? '',
  key: process.env.READ_ARTICLE_API_KEY ?? '',
})

export const fetchQuizHistory = async (): Promise<QuizHistoryResponse> => {
  const { url, key } = getEnv()
  if (!url || !key) return { quizzes: [] }

  const res = await fetch(`${url}/api/quiz-history`, {
    headers: { Authorization: `Bearer ${key}` },
  })
  if (!res.ok) return { quizzes: [] }
  return (await res.json()) as QuizHistoryResponse
}

export const fetchQuizDetail = async (id: number): Promise<QuizDetailResponse | null> => {
  const { url, key } = getEnv()
  if (!url || !key) return null

  const res = await fetch(`${url}/api/quiz-history/${id}`, {
    headers: { Authorization: `Bearer ${key}` },
  })
  if (!res.ok) return null
  return (await res.json()) as QuizDetailResponse
}
