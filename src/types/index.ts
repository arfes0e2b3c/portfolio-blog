export type Category = {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	name: string
}
export type Article = {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	title: string
	content: string
	draftContent: string
	eyecatch?: {
		url: string
		height: number
		width: number
	}
	category?: Category
	isPublished: boolean
	// 外部記事統合用フィールド
	isExternal?: boolean
	externalUrl?: string
	externalSource?: string
}

export type ArticleResponse = {
	contents?: Article[]
	totalCount?: number
	offset?: number
	limit?: number
}

export type CategoryResponse = {
	contents?: Category[]
	totalCount?: number
	offset?: number
	limit?: number
}

export type ParallaxNums = {
	pages: number
	profileHead: {
		start: number
		end: number
	}
	profileBody: number
	recentPost: number
	skillHead: {
		start: number
		end: number
	}
	skillBody: number
	productHead: {
		start: number
		end: number
	}
	productBody: number
}

export type TableOfContent = {
	level: string
	title: string
	href: string
}

export type TalkAndEvent = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  subTitle?: string
  date: string
  src?: string
}

export type TalkAndEventResponse = {
  contents?: TalkAndEvent[]
  totalCount?: number
  offset?: number
  limit?: number
}

export type QuizHistoryItem = {
  id: number
  article_id: string
  article_title: string
  article_url: string | null
  question: string
  level: string
  topics: string[]
  reps: number
  scheduled_days: number
  last_review: string | null
  created_at: string
  latest_quality: number
  latest_answered_at: string
}

export type QuizHistoryResponse = {
  quizzes: QuizHistoryItem[]
}

export type QuizAnswerRecord = {
  id: number
  quiz_id: number
  user_answer: string
  quality: number
  is_correct: boolean
  referenced: boolean
  feedback_neutral: string
  answered_at: string
}

export type QuizDetailRow = {
  id: number
  article_id: string
  article_title: string
  article_url: string | null
  question: string
  answer: string
  key_point: string
  level: string
  topics: string[]
  reps: number
  scheduled_days: number
  last_review: string | null
  created_at: string
}

export type QuizDetailResponse = {
  quiz: QuizDetailRow
  answers: QuizAnswerRecord[]
}

export type ReadArticle = {
  article_id: string
  article_title: string
  article_url: string
  feedback_type: string
  note: string
  user_comment: string
  topics: string[]
  category: string
  read_at: string
  delivered_at: string | null
}

export type ReadArticleResponse = {
  articles: ReadArticle[]
  total: number
  currentStreak: number
  maxStreak: number
}
