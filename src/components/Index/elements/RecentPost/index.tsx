import Link from 'next/link'
import { ArticleCard } from './elements/articleCard'
import {
	articleContainer,
	articleLink,
	articleWrapper,
	linkContainer,
	recentPost,
	sectionTitle,
} from './styles/recentPost.css'
import { Article } from '@/types'

export const RecentPost = (props: { articleList: Article[] }) => {
	const articleList = props.articleList.slice(0, 3)
	return (
		<section className={recentPost}>
			<h2 className={sectionTitle}>RECENT POST</h2>
			<div className={articleWrapper}>
				<div className={articleContainer}>
					{articleList.map((article) => {
						return <ArticleCard article={article} key={article.id} />
					})}
				</div>
			</div>
			<div className={linkContainer}>
				<Link className={articleLink} href={'/article'}>
					All ARTICLES
				</Link>
			</div>
		</section>
	)
}
