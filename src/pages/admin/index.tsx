import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleListAdmin } from '@/api/articleListAdmin'
import { AdminList } from '@/components/AdminList'
import { ArticleResponse } from '@/types'

export const getStaticProps = async () => {
  const articleList = await fetchArticleListAdmin()
  return {
    props: {
      articleList,
    },
    revalidate: 60,
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
