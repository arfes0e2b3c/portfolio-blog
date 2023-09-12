import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleDetail } from '@/api/articleDetail'
import { fetchArticleListAdmin } from '@/api/articleListAdmin'
import { AdminEdit } from '@/components/AdminEdit'
import { NoAuth } from '@/components/shared/NoAuth'
import { Article } from '@/types'

export async function getStaticPaths() {
  const articles = await fetchArticleListAdmin()
  const ids = articles.contents?.map((article) => {
    return {
      params: {
        id: article.id,
      },
    }
  })
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps = async (props: { params: { id: string } }) => {
  const article = await fetchArticleDetail(props.params.id)
  return {
    props: {
      article,
    },
    revalidate: 60,
  }
}

const queryClient = new QueryClient()

const AdminEditPage: NextPage<{ article: Article }> = ({ article }) => {
  const { status } = useSession()
  if (status !== 'authenticated') {
    return <NoAuth />
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AdminEdit article={article} />
    </QueryClientProvider>
  )
}

export default AdminEditPage
