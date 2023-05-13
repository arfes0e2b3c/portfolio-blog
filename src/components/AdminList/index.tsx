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
import { UseFetchArticleList } from '@/hooks/articleListHooks'
import { ArticleResponse } from '@/types'

export const AdminList = (props: { articleList: ArticleResponse }) => {
  const {
    data: result,
    isLoading,
    isError,
    refetch,
  } = useQuery('admin-articles', UseFetchArticleList, {
    refetchOnWindowFocus: false,
    initialData: props.articleList,
  })
  const articleList = result && result.contents
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
        <Link className={createArticleButton} href={'/admin/create'}>
          新規作成
        </Link>
      </div>
      <div className={articleListTable}>
        <div className={articleListTableHead}>
          <p className={articleId}>ID</p>
          <p className={articleTitle}>記事タイトル</p>
          <p className={articlePublishedAt}>公開日</p>
          <p className={articleUpdatedAt}>更新日</p>
          <p className={articleOther}></p>
          <p className={articleOther}></p>
          <p className={articleOther}></p>
        </div>
        <ul className={articleListTableBody}>
          {articleList &&
            articleList.map((article, index) => {
              return (
                <ArticleCard article={article} index={index} key={article.id} refetch={refetch} />
              )
            })}
        </ul>
      </div>
    </section>
  )
}
