import { Noto_Sans_JP } from 'next/font/google'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import markdownToHtml from 'zenn-markdown-html'
import { ArticleDetailSidebar } from './elements/ArticleDetailSidebar'
import { usefetchArticleDetail } from './hooks/ArticleDetailHooks'
import {
  articleDetailBody,
  articleDetailContainer,
  articleDetailContainerInner,
  articleDetailContent,
  articleDetailSidebar,
  articleDetailTitle,
} from './styles/articleDetail.css'
import { Article } from '@/types'

export const fetchArticleDetail = async (id: string): Promise<Article> => {
  const articleDetail = await usefetchArticleDetail(id)
  return articleDetail
}

const notoSansJpThin = Noto_Sans_JP({
  weight: '100',
  subsets: ['latin'],
})

const notoSansJpBold = Noto_Sans_JP({
  weight: '300',
  subsets: ['latin'],
})

export const ArticleDetail = () => {
  const router = useRouter()

  const id: string = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id ?? ''

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery(['detail', id], () => fetchArticleDetail(id), {
    refetchOnWindowFocus: false,
  })
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError || !result) {
    return <span>Error fetching articles</span>
  }
  const articleDetail = result

  return (
    <section className={articleDetailContainer}>
      <div className={articleDetailContainerInner}>
        <article className={[articleDetailBody, notoSansJpThin.className].join(' ')}>
          <h2 className={[notoSansJpBold.className, articleDetailTitle].join(' ')}>
            {articleDetail.title}
          </h2>
          <div
            className={['znc', articleDetailContent].join(' ')}
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(articleDetail.content, {
                embedOrigin: 'https://embed.zenn.studio',
              }),
            }}
          ></div>
          <div className={[articleDetailSidebar].join(' ')}>
            <ArticleDetailSidebar article={articleDetail} />
          </div>
        </article>
      </div>
    </section>
  )
}
