import { GetStaticPropsResult, NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticleList } from '@/components/ArticleList'

const queryClient = new QueryClient()

const ArticleListPage: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleList />
    </QueryClientProvider>
  )
}

export default ArticleListPage
