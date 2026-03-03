import { fetchReadArticles } from '@/api/readHistory'
import { ReadHistory } from '@/components/ReadHistory'
import type { ReadArticle } from '@/types'
import { NextPage } from 'next'
import Head from 'next/head'

export const getStaticProps = async () => {
	const data = await fetchReadArticles()
	const { articles, total } = data
	const currentStreak = data.currentStreak ?? 0
	const maxStreak = data.maxStreak ?? 0
	return {
		props: {
			articles,
			total,
			currentStreak,
			maxStreak,
		},
		revalidate: 3600,
	}
}

type Props = {
	articles: ReadArticle[]
	total: number
	currentStreak: number
	maxStreak: number
}

const ReadPage: NextPage<Props> = ({ articles, total, currentStreak, maxStreak }) => {
	return (
		<>
			<Head>
				<title>Read | ARFES</title>
				<meta name='description' content='Reading history from tech-daily-digest' />
			</Head>
			<ReadHistory articles={articles} total={total} currentStreak={currentStreak} maxStreak={maxStreak} />
		</>
	)
}

export default ReadPage
