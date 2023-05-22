import Head from 'next/head'
import { Index } from '@/components/Index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Arfes</title>
        <meta name='description' content='Portfolio & Blog' />
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
