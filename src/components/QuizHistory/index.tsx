import type { QuizHistoryItem } from '@/types'
import { FC } from 'react'
import { QuizCard } from './elements/QuizCard'
import {
  cardList,
  emptyMessage,
  endMessage,
  quizHistoryInner,
  quizHistoryTitle,
} from './styles/quizHistory.css'

type Props = {
  quizzes: QuizHistoryItem[]
}

export const QuizHistory: FC<Props> = ({ quizzes }) => {
  return (
    <div className={quizHistoryInner}>
      <h2 className={quizHistoryTitle}>QUIZ</h2>

      {quizzes.length > 0 ? (
        <>
          <div className={cardList}>
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
          <p className={endMessage}>答えられないのは、まだ出会っていないだけ。</p>
        </>
      ) : (
        <p className={emptyMessage}>No quiz history found.</p>
      )}
    </div>
  )
}
