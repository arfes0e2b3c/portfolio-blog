import Head from 'next/head'
import { Index } from '@/components/Index'

export default function Home() {
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
        <Index />
      </main>
    </>
  )
}
