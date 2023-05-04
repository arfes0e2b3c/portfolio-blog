import { GetStaticPropsResult, NextPage } from 'next'
import { ArticleList } from '@/components/ArticleList'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Page: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleList />
    </QueryClientProvider>
  )
}

export default Page
