import type { QuizHistoryItem } from '@/types'
import { FC, useMemo } from 'react'
import { QuizCard } from './elements/QuizCard'
import {
  cardList,
  emptyMessage,
  endMessage,
  quizHistoryInner,
  quizHistoryTitle,
  statItem,
  statLabel,
  statValue,
  statsRow,
} from './styles/quizHistory.css'

type Props = {
  quizzes: QuizHistoryItem[]
}

const QUIZ_RANKS = [
  { minInterval: 30, label: '👑 Master' },
  { minInterval: 10, label: '🔥 Expert' },
  { minInterval: 1, label: '⭐ Familiar' },
  { minInterval: 0, label: '💀 Learning' },
]

function getQuizRank(scheduledDays: number, reps: number) {
  if (reps === 0) return QUIZ_RANKS[3]
  return QUIZ_RANKS.find((r) => scheduledDays >= r.minInterval) ?? QUIZ_RANKS[3]
}

export const QuizHistory: FC<Props> = ({ quizzes }) => {
  const rankCounts = useMemo(() => {
    const counts = Object.fromEntries(QUIZ_RANKS.map((r) => [r.label, 0]))
    for (const q of quizzes) {
      const rank = getQuizRank(q.scheduled_days, q.reps)
      counts[rank.label]++
    }
    return counts
  }, [quizzes])

  return (
    <div className={quizHistoryInner}>
      <h2 className={quizHistoryTitle}>QUIZ</h2>

      {quizzes.length > 0 && (
        <div className={statsRow}>
          <div className={statItem}>
            <span className={statValue}>{quizzes.length}</span>
            <span className={statLabel}>Total</span>
          </div>
          {QUIZ_RANKS.map(({ label }) => (
            <div key={label} className={statItem}>
              <span className={statValue}>{rankCounts[label]}</span>
              <span className={statLabel}>{label}</span>
            </div>
          ))}
        </div>
      )}

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
