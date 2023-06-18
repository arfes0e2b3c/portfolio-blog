import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleListAdmin } from '@/api/articleListAdmin'
import { AdminList } from '@/components/AdminList'
import { NoAuth } from '@/components/shared/NoAuth'
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
  const { status } = useSession()
  if (status !== 'authenticated') {
    return <NoAuth />
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AdminList articleList={articleList} />
    </QueryClientProvider>
  )
}

export default AdminIndexPage
