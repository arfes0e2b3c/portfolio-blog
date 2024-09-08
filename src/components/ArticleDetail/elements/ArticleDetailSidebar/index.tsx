import type { Article, TableOfContent } from '@/types'
import Image from 'next/image'
import { ArticleIndex } from './elements/ArticleIndex'
import { ArticleInfo } from './elements/ArticleInfo'
import {
	articleDetailSidebar,
	authoInfoContainer,
	authorIcon,
	description,
	fullName,
	iconContainer,
	lowerContainer,
	stickySidebarContainer,
	upperContainer,
	upperRightContainer,
} from './styles/articleDetailSidebar.css'

type SnsInfo = {
	id: number
	href: string
	imagePath: string
	alt: string
}
const snsInfos: SnsInfo[] = [
	{
		id: 1,
		href: 'https://github.com/arfes0e2b3c',
		imagePath: '/icons_sns/github.svg',
		alt: 'githubのアイコン画像',
	},
	{
		id: 2,
		href: 'https://x.com/0e2b3c',
		imagePath: 'icons_sns/x.svg',
		alt: 'xのアイコン画像',
	},
	{
		id: 3,
		href: 'https://zenn.dev/arfes',
		imagePath: '/icons_sns/zenn.svg',
		alt: 'zennのアイコン画像',
	},
]

export const ArticleDetailSidebar = (props: {
	article: Article
	tableOfContent: TableOfContent[]
}) => {
	return (
		<section className={articleDetailSidebar}>
			<div className={authoInfoContainer}>
				<div className={upperContainer}>
					<Image
						className={authorIcon}
						src='/images/yata_icon.jpg'
						alt='やたのアイコン画像'
						width={80}
						height={80}
					/>
					<div className={upperRightContainer}>
						<h3 className={fullName}>YUKI YATA</h3>
						<div className={iconContainer}>
							{snsInfos.map((sns) => {
								return (
									<a
										key={sns.id}
										href={sns.href}
										target='_blank'
										rel='noreferrer'
									>
										<Image
											src={sns.imagePath}
											alt={sns.alt}
											width={25}
											height={25}
										/>
									</a>
								)
							})}
						</div>
					</div>
				</div>
				<div className={lowerContainer}>
					<p className={description}>
						横浜国立大学経営学部４年
						<br />
						フロントエンドエンジニアを目指しています。
						<br />
						Vue / React / Go
					</p>
				</div>
			</div>
			<div className={stickySidebarContainer}>
				<ArticleInfo article={props.article} />
				<ArticleIndex tableOfContent={props.tableOfContent} />
			</div>
		</section>
	)
}
