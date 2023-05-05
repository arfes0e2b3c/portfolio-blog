import type { AppProps } from 'next/app'
import 'sanitize.css'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { useEffect } from 'react'
import { Header } from '@/components/shared/Header'
import { ShadowHeader } from '@/components/shared/ShadowHeader'
import 'zenn-content-css'
import Script from 'next/script'

const inter = Inter({
  weight: '100',
  subsets: ['cyrillic'],
})

const notoSansJP = Noto_Sans_JP({
  weight: '100',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('zenn-embed-elements')
  }, [])
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily}, ${notoSansJP.style.fontFamily};
            color: #333;
          }
        `}
      </style>
      <Script src='https://embed.zenn.studio/js/listen-embed-event.js'></Script>
      <Header />
      <ShadowHeader />
      <Component {...pageProps} />
    </>
  )
}
