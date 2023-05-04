import { GetStaticPropsResult, NextPage } from 'next'
import { BlogList } from '@/components/BlogList'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Page: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogList />
    </QueryClientProvider>
  )
}

export default Page
