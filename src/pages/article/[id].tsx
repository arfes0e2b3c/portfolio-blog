import { NextPage } from 'next'
import Head from 'next/head'
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
    revalidate: 60,
  }
}

const queryClient = new QueryClient()

const ArticleDetailPage: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta
          property='og:image'
          content={article.eyecatch?.url ?? '/images/eyecatch_no-image.png'}
        />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.content.slice(0, 60)} />
        <meta property='og:type' content='article' />
        <meta property='twitter:title' content={article.title} />
        <meta property='twitter:card' content='summary_large_image' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ArticleDetail article={article} />
      </QueryClientProvider>
    </>
  )
}

export default ArticleDetailPage
