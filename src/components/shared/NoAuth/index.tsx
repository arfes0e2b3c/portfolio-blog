import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { button, noAuth, noAuthWrapper } from './styles/noAuth.css'

const inter = Inter({
  weight: '100',
  subsets: ['cyrillic'],
})
export const NoAuth = () => {
  const router = useRouter()
  return (
    <div className={noAuthWrapper}>
      <section className={noAuth}>
        <h3>You are not authenticated.</h3>
        <button className={[button, inter.className].join(' ')} onClick={() => signIn('github')}>
          SIGN IN
        </button>
        <button className={[button, inter.className].join(' ')} onClick={() => router.back()}>
          BACK
        </button>
      </section>
    </div>
  )
}
