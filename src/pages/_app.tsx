import '@/styles/globals.css'
import { Header } from '@/components/shared/Header'
import type { AppProps } from 'next/app'
import 'sanitize.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
