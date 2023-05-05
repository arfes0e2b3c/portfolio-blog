import { GetStaticPropsResult, NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticleList } from '@/components/ArticleList'

const queryClient = new QueryClient()

const Page: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleList />
    </QueryClientProvider>
  )
}

export default Page
