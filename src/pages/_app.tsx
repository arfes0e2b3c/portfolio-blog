import { Header } from '@/components/shared/Header'
import type { AppProps } from 'next/app'
import 'sanitize.css'
import { useEffect } from 'react'
import { ShadowHeader } from '@/components/shared/ShadowHeader'

const inter = Inter({
  weight: '100',
  subsets: ['cyrillic'],
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
            font-family: ${inter.style.fontFamily};
            font-weight: ${400};
            color: #333;
          }
        `}
      </style>
      <Header />
      <ShadowHeader />
      <Component {...pageProps} />
    </>
  )
}
