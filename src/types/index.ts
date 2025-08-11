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
