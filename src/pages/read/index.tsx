import { fetchReadArticles } from '@/api/readHistory'
import { ReadHistory } from '@/components/ReadHistory'
import type { ReadArticle } from '@/types'
import { NextPage } from 'next'
import Head from 'next/head'

export const getStaticProps = async () => {
	const { articles, total } = await fetchReadArticles()
	return {
		props: {
			articles,
			total,
		},
		revalidate: 3600,
	}
}

type Props = {
	articles: ReadArticle[]
	total: number
}

const ReadPage: NextPage<Props> = ({ articles, total }) => {
	return (
		<>
			<Head>
				<title>Read | ARFES</title>
				<meta name='description' content='Reading history from tech-daily-digest' />
			</Head>
			<ReadHistory articles={articles} total={total} />
		</>
	)
}

export default ReadPage
