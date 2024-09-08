import { Article } from '@/types'
import { formatTime2Ymd } from '@/utils/function'
import Image from 'next/image'
import {
	articleInfoContainer,
	articleInfoItem,
	articleInfoList,
	itemLabel,
	labelContainer,
} from './index.css'

export const ArticleInfo = (props: { article: Article }) => {
	const article = props.article
	article.publishedAt = formatTime2Ymd(article.publishedAt)
	article.updatedAt = formatTime2Ymd(article.updatedAt)
	const articleData = [
		{
			key: 1,
			img_path: 'author.svg',
			label: '著者名',
			content: 'やた',
		},
		{
			key: 2,
			img_path: 'calendar.svg',
			label: '公開日',
			content: article.publishedAt,
		},
		{
			key: 3,
			img_path: 'recycle.svg',
			label: '更新日',
			content: article.updatedAt,
		},
		{
			key: 4,
			img_path: 'memo.svg',
			label: '文字数',
			content: `約${article.content.length}字`,
		},
		{
			key: 5,
			img_path: 'category.svg',
			label: 'カテゴリ',
			content: `${article.category?.name || '-'}`,
		},
	]

	return (
		<div className={articleInfoContainer}>
			<ul className={articleInfoList}>
				{articleData.map((item) => {
					return (
						<li className={articleInfoItem} key={item.key}>
							<div className={labelContainer}>
								<Image
									src={`/icons_common/${item.img_path}`}
									alt={`${item.label}の画像`}
									width={30}
									height={30}
								/>
								<p className={itemLabel}>{item.label}</p>
							</div>
							<p>{item.content}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
