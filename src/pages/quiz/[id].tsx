import { fetchQuizDetail, fetchQuizHistory } from '@/api/quizHistory'
import type { QuizAnswerRecord, QuizDetailRow } from '@/types'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  answerCard,
  answerDate,
  answerHeader,
  answerText,
  articleTitle,
  backLink,
  container,
  divider,
  externalLink,
  feedbackText,
  keyPointBox,
  metaBadge,
  metaRow,
  modelAnswerBox,
  qualityBadge,
  qualityCorrect,
  qualityNeutral,
  qualityWrong,
  questionHeading,
  sectionTitle,
} from './quizDetail.css'

const LEVEL_LABEL: Record<string, string> = {
  '基本': '🟢 基本',
  '応用': '🟡 応用',
  '思考': '🔴 思考',
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

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

type Props = {
  quiz: QuizDetailRow
  answers: QuizAnswerRecord[]
}

const QuizDetailPage: NextPage<Props> = ({ quiz, answers }) => {
  const rank = getQuizRank(quiz.scheduled_days, quiz.reps)
  const levelLabel = quiz.level ? (LEVEL_LABEL[quiz.level] ?? quiz.level) : ''

  return (
    <>
      <Head>
        <title>Quiz Detail | ARFES</title>
      </Head>
      <div className={container}>
        <Link href='/quiz' className={backLink}>
          &larr; Quiz 一覧に戻る
        </Link>

        <p className={articleTitle}>{quiz.article_title}</p>
        <h1 className={questionHeading}>{quiz.question}</h1>

        <div className={metaRow}>
          {levelLabel && <span className={metaBadge}>{levelLabel}</span>}
          <span className={metaBadge}>{rank.label}</span>
          {quiz.reps > 0 && <span className={metaBadge}>{quiz.reps}回出題済み</span>}
          {quiz.article_url && (
            <a href={quiz.article_url} target='_blank' rel='noopener noreferrer' className={externalLink}>
              記事を読む &rarr;
            </a>
          )}
        </div>

        <p className={sectionTitle}>模範解答</p>
        <div className={modelAnswerBox}>{quiz.answer}</div>
        <p className={keyPointBox}>🔑 {quiz.key_point}</p>

        <hr className={divider} />

        <p className={sectionTitle}>回答履歴 ({answers.length}回)</p>

        {answers.length === 0 ? (
          <p style={{ color: '#999', fontSize: '0.9rem' }}>まだ回答がありません。</p>
        ) : (
          answers.map((a, i) => {
            const isCorrect = a.quality >= 3
            const badgeClass = isCorrect ? qualityCorrect : a.quality === 0 ? qualityNeutral : qualityWrong
            const badgeText = a.quality === 0 ? '未回答' : isCorrect ? `正解 (${a.quality}/5)` : `不正解 (${a.quality}/5)`
            return (
              <div key={a.id} className={answerCard}>
                <div className={answerHeader}>
                  <span className={answerDate}>
                    #{answers.length - i} &nbsp; {formatDate(a.answered_at)}
                  </span>
                  <span className={[qualityBadge, badgeClass].join(' ')}>{badgeText}</span>
                </div>
                <p className={answerText}>{a.user_answer || '（回答なし）'}</p>
                {a.feedback_neutral && <p className={feedbackText}>{a.feedback_neutral}</p>}
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchQuizHistory()
  const paths = data.quizzes.map((q) => ({ params: { id: String(q.id) } }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = parseInt(params?.id as string, 10)
  if (isNaN(id)) return { notFound: true }

  const detail = await fetchQuizDetail(id)
  if (!detail) return { notFound: true }

  return {
    props: { quiz: detail.quiz, answers: detail.answers },
    revalidate: 3600,
  }
}

export default QuizDetailPage
