import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticleDetail } from '@/components/ArticleDetail'

const queryClient = new QueryClient()

const DetailPage: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleDetail />
    </QueryClientProvider>
  )
}

export default DetailPage
