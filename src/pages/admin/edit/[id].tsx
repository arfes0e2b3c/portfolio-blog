import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleDetail } from '@/api/articleDetail'
import { fetchArticleList } from '@/api/articleList'
import { AdminEdit } from '@/components/AdminEdit'
import { Article } from '@/types'

export async function getStaticPaths() {
  const articles = await fetchArticleList()
  const ids = articles?.contents?.map((article) => {
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
  }
}

const queryClient = new QueryClient()

const AdminEditPage: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminEdit article={article} />
    </QueryClientProvider>
  )
}

export default AdminEditPage
