import { fetchArticleList } from '@/api/articleList'
import { fetchReadArticles } from '@/api/readHistory'
import { Index } from '@/components/Index'
import { ArticleResponse, ReadArticle } from '@/types'
import { NextPage } from 'next'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

export const getStaticProps = async () => {
  const [articleList, readData] = await Promise.all([
    fetchArticleList(),
    fetchReadArticles(),
  ])
  return {
    props: {
      articleList,
      recentReadArticles: readData.articles.slice(0, 3),
    },
    revalidate: 60,
  }
}

const queryClient = new QueryClient()

const Home: NextPage<{ articleList: ArticleResponse; recentReadArticles: ReadArticle[] }> = ({ articleList, recentReadArticles }) => {
  return (
    <>
      <Head>
        <title>Arfes&apos;s Portfolio & Blog</title>
      </Head>
      <style jsx global>
        {`
          footer {
            position: absolute;
            top: 4300px;
          }
        `}
      </style>
      <main>
        <QueryClientProvider client={queryClient}>
          <Index articleList={articleList} recentReadArticles={recentReadArticles} />
        </QueryClientProvider>
      </main>
    </>
  )
}

export default Home
