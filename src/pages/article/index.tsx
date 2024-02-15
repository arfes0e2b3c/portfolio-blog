import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticleList } from '@/components/ArticleList'
import { ArticleResponse } from '@/types'

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article/list`)
  const articleList = await res.json()
  return {
    props: {
      articleList,
    },
    revalidate: 60,
  }
}

const queryClient = new QueryClient()

const ArticleListPage: NextPage<{ articleList: ArticleResponse }> = ({ articleList }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleList articleList={articleList} />
    </QueryClientProvider>
  )
}

export default ArticleListPage
