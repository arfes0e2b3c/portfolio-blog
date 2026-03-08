import { fetchQuizHistory } from '@/api/quizHistory'
import { QuizHistory } from '@/components/QuizHistory'
import type { QuizHistoryItem } from '@/types'
import { NextPage } from 'next'
import Head from 'next/head'

export const getStaticProps = async () => {
  const data = await fetchQuizHistory()
  return {
    props: { quizzes: data.quizzes },
    revalidate: 3600,
  }
}

type Props = {
  quizzes: QuizHistoryItem[]
}

const QuizPage: NextPage<Props> = ({ quizzes }) => {
  return (
    <>
      <Head>
        <title>Quiz | ARFES</title>
        <meta name='description' content='Quiz history from tech-daily-digest' />
      </Head>
      <QuizHistory quizzes={quizzes} />
    </>
  )
}

export default QuizPage
