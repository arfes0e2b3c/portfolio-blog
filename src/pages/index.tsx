import { NextPage } from 'next'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleList } from '@/api/articleList'
import { Index } from '@/components/Index'
import { ArticleResponse } from '@/types'

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article/list`)
  const articleList = await res.json()
  return {
    props: {
      articleList,
    },
    revalidate: 60,
  }
}

const queryClient = new QueryClient()

const Home: NextPage<{ articleList: ArticleResponse }> = ({ articleList }) => {
  return (
    <>
      <Head>
        <title>Arfes&apos;s Portfolio & Blog</title>
      </Head>
      <style jsx global>
        {`
          footer {
            position: absolute;
            top: 5500px;
          }
        `}
      </style>
      <main>
        <QueryClientProvider client={queryClient}>
          <Index articleList={articleList} />
        </QueryClientProvider>
      </main>
    </>
  )
}

export default Home
