import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleList } from '@/api/articleList'
import { AdminList } from '@/components/AdminList'
import { ArticleResponse } from '@/types'

export const getStaticProps = async () => {
  const articleList = await fetchArticleList()
  return {
    props: {
      articleList,
    },
  }
}

const queryClient = new QueryClient()

const AdminIndexPage: NextPage<{ articleList: ArticleResponse }> = ({ articleList }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminList articleList={articleList} />
    </QueryClientProvider>
  )
}

export default AdminIndexPage
