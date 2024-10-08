import { UseFetchArticleListAdmin } from '@/hooks/articleListAdminHooks'
import { ArticleResponse } from '@/types'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { ArticleCard } from './elements/ArticleCard'
import {
	adminList,
	adminListHeader,
	adminListTitle,
	articleId,
	articleListTable,
	articleListTableBody,
	articleListTableHead,
	articleOther,
	articlePublishedAt,
	articleTitle,
	articleUpdatedAt,
	createArticleButton,
} from './styles/articleList.css'

export const AdminList = (props: { articleList: ArticleResponse }) => {
	const {
		data: result,
		isLoading,
		isError,
		refetch,
	} = useQuery('admin-articles', UseFetchArticleListAdmin, {
		refetchOnWindowFocus: false,
		initialData: props.articleList,
	})
	const articleList = result?.contents
	if (isLoading) {
		return <span>Loading...</span>
	}

	if (isError) {
		return <span>Error fetching articles</span>
	}

	return (
		<section className={adminList}>
			<div className={adminListHeader}>
				<h2 className={adminListTitle}>記事一覧</h2>
				<Link className={createArticleButton} href={'/shulkssbu/create'}>
					新規作成
				</Link>
			</div>
			<div className={articleListTable}>
				<div className={articleListTableHead}>
					<div className={articleId}>ID</div>
					<div className={articleTitle}>記事タイトル</div>
					<div className={articlePublishedAt}>公開日</div>
					<div className={articleUpdatedAt}>更新日</div>
					<div className={articleOther} />
					<div className={articleOther} />
					<div className={articleOther} />
				</div>
				<ul className={articleListTableBody}>
					{articleList?.map((article, index) => {
						return (
							<ArticleCard
								article={article}
								index={index}
								key={article.id}
								refetch={refetch}
							/>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
