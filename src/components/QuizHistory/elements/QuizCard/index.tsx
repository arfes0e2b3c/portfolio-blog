import type { QuizHistoryItem } from '@/types'
import Link from 'next/link'
import { FC } from 'react'
import {
  arrow,
  card,
  cardHeader,
  levelBadge,
  metaRow,
  questionText,
  quizDate,
  rankBadge,
  repsText,
  scoreBadge,
  scoreCorrect,
  scoreNeutral,
  scoreWrong,
} from './styles/quizCard.css'

const LEVEL_LABEL: Record<string, string> = {
  '基本': '🟢 基本',
  '応用': '🟡 応用',
  '思考': '🔴 思考',
}

const QUIZ_RANKS = [
  { key: 'uchu', label: '👑 Master', minInterval: 30 },
  { key: 'makyou', label: '🔥 Expert', minInterval: 10 },
  { key: 'vip', label: '⭐ Familiar', minInterval: 1 },
  { key: 'gyaku_vip', label: '💀 Learning', minInterval: 0 },
]

function getQuizRank(scheduledDays: number, reps: number) {
  if (reps === 0) return QUIZ_RANKS[3]
  return QUIZ_RANKS.find((r) => scheduledDays >= r.minInterval) ?? QUIZ_RANKS[3]
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

function qualityLabel(quality: number): { text: string; className: string } {
  if (quality === 0) return { text: '未回答', className: scoreNeutral }
  if (quality >= 3) return { text: `正解 (${quality}/5)`, className: scoreCorrect }
  return { text: `不正解 (${quality}/5)`, className: scoreWrong }
}

type Props = {
  quiz: QuizHistoryItem
}

export const QuizCard: FC<Props> = ({ quiz }) => {
  const rank = getQuizRank(quiz.scheduled_days, quiz.reps)
  const dateStr = quiz.latest_answered_at
    ? formatDate(quiz.latest_answered_at)
    : formatDate(quiz.created_at)
  const score = quiz.latest_quality !== null ? qualityLabel(quiz.latest_quality) : null
  const levelLabel = quiz.level ? (LEVEL_LABEL[quiz.level] ?? quiz.level) : ''

  return (
    <Link href={`/quiz/${quiz.id}`} className={card}>
      <div className={cardHeader}>
        <span className={quizDate}>{dateStr}</span>
        {levelLabel && <span className={levelBadge}>{levelLabel}</span>}
      </div>

      <span className={questionText}>
        {quiz.question}
        <span className={arrow}>&rarr;</span>
      </span>

      <div className={metaRow}>
        {score && (
          <span className={[scoreBadge, score.className].join(' ')}>{score.text}</span>
        )}
        <span className={rankBadge}>{rank.label}</span>
        {quiz.reps > 0 && <span className={repsText}>{quiz.reps}回出題済み</span>}
      </div>
    </Link>
  )
}
