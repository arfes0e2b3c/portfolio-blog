import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticleList } from '@/components/ArticleList'
import { ArticleResponse } from '@/types'
import { fetchArticleList } from '@/api/articleList'

export const getStaticProps = async () => {
  const articleList = await fetchArticleList()
  return {
    props: {
      articleList,
    },
    revalidate: 60,
  }
}

const queryClient = new QueryClient()

const ArticleListPage: NextPage<{ articleList: ArticleResponse }> = ({ articleList }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleList articleList={articleList} />
    </QueryClientProvider>
  )
}

export default ArticleListPage
