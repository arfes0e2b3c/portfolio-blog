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
							<a
								href='https://github.com/arfes0e2b3c'
								target='_blank'
								rel='noreferrer'
							>
								<Image
									src='/icons_sns/github.svg'
									alt='githubのアイコン画像'
									width={25}
									height={25}
								/>
							</a>
							<a href='https://x.com/0e2b3c' target='_blank' rel='noreferrer'>
								<Image
									src='/icons_sns/x.svg'
									alt='xのアイコン画像'
									width={25}
									height={25}
								/>
							</a>
							<a href='https://zenn.dev/arfes' target='_blank' rel='noreferrer'>
								<Image
									src='/icons_sns/zenn.svg'
									alt='zennのアイコン画像'
									width={25}
									height={25}
								/>
							</a>
						</div>
					</div>
				</div>
				<div className={lowerContainer}>
					<p className={description}>
						株式会社LayerX
						<br />
						フロントエンドエンジニアを目指しています。
						<br />
						Vue / React / Go / TypeScript
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
