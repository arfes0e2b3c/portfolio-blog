export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedat: string
  title: string
  content: string
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
    revisedat: string
    name: string
  }
}

export type BlogResponse = {
  contents?: Blog[]
  totalCount?: number
  offset?: number
  limit?: number
}
