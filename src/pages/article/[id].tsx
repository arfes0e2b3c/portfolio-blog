import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleDetail } from '@/api/articleDetail'
import { fetchArticleList } from '@/api/articleList'
import { ArticleDetail } from '@/components/ArticleDetail'
import { Article } from '@/types'

export const getStaticPaths = async () => {
  const articleList = await fetchArticleList()
  const ids = articleList.contents?.map((article) => {
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

const ArticleDetailPage: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleDetail article={article} />
    </QueryClientProvider>
  )
}

export default ArticleDetailPage
