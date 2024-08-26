import { NextPage } from 'next'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fetchArticleDetail } from '@/api/articleDetail'
import { ArticleDetail } from '@/components/ArticleDetail'
import { Article, ArticleResponse, TableOfContent } from '@/types'
import { JSDOM } from 'jsdom'
import markdownToHtml from 'zenn-markdown-html'
import { fetchArticleList } from '@/api/articleList'

export const getStaticPaths = async () => {
	const articleList = await fetchArticleList()
	const ids = articleList.contents?.map((article) => {
		return {
			params: {
				id: article.id,
			},
		}
	})
	return {
		paths: ids,
		fallback: false,
	}
}

export const getStaticProps = async (props: { params: { id: string } }) => {
	const article = await fetchArticleDetail(props.params.id)
	const domHtml = new JSDOM(markdownToHtml(article.content)).window.document

	const elements = domHtml.querySelectorAll<HTMLElement>('h1, h2')
	const tableOfContent: TableOfContent[] = []
	elements.forEach((element) => {
		const level = element.tagName
		const title = element.innerHTML.split('</a> ')[1]
		const href = '#' + element.id
		const record = { level: level, title: title, href: href }
		tableOfContent.push(record)
	})
	return {
		props: {
			article,
			tableOfContent,
		},
		revalidate: 60,
	}
}

const queryClient = new QueryClient()

const ArticleDetailPage: NextPage<{
	article: Article
	tableOfContent: TableOfContent[]
}> = ({ article, tableOfContent }) => {
	return (
		<>
			<Head>
				<title>{article.title}</title>
				<meta
					property='og:image'
					content={article.eyecatch?.url ?? '/images/eyecatch_no-image.png'}
				/>
				<meta property='og:title' content={article.title} />
				<meta
					property='og:description'
					content={article.content.slice(0, 60)}
				/>
				<meta property='og:type' content='article' />
				<meta property='twitter:title' content={article.title} />
				<meta property='twitter:card' content='summary_large_image' />
			</Head>
			<QueryClientProvider client={queryClient}>
				<ArticleDetail article={article} tableOfContent={tableOfContent} />
			</QueryClientProvider>
		</>
	)
}

export default ArticleDetailPage
