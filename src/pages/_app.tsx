import { Header } from '@/components/shared/Header'
import type { AppProps } from 'next/app'
import 'sanitize.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: '100',
  subsets: ['cyrillic'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
            font-weight: ${400};
          }
        `}
      </style>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
