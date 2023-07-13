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
  category?: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
  isPublished: boolean
}

export type ArticleResponse = {
  contents?: Article[]
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