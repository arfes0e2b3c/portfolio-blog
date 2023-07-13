import { NextPage } from 'next'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleList } from '@/api/articleList'
import { Index } from '@/components/Index'
import { ArticleResponse } from '@/types'

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
    

const Home: NextPage<{ articleList: ArticleResponse }> = ({ articleList }) => {
  return (
    <>
      <Head>
        <title>Arfes&apos;s Portfolio & Blog</title>
        <meta name='description' content="Arfes's Portfolio & Blog" />
        <meta property='og:image' content={'/public/images/eyecatch_no-image.png'} />
        <meta property='og:title' content="Arfes's Portfolio & Blog" />
        <meta property='og:description' content="Arfes's Portfolio & Blog" />
        <meta property='og:type' content='article' />
        <meta property='twitter:title' content='Arfes' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <style jsx global>
        {`
          html {
            overflow: hidden;
          }
          footer {
            display: none;
          }
        `}
      </style>
      <main>
        <QueryClientProvider client={queryClient}>
          <Index  articleList={articleList}/>
        </QueryClientProvider>
      </main>
    </>
  )
}

export default Home