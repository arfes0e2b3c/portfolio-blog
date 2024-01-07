import { Noto_Sans_JP, Zen_Kaku_Gothic_Antique } from 'next/font/google'
import markdownToHtml from 'zenn-markdown-html'
import { UseFetchArticleDetail } from '../../hooks/ArticleDetailHooks'
import { ArticleDetailSidebar } from './elements/ArticleDetailSidebar'
import {
  articleDetailBody,
  articleDetailContainer,
  articleDetailContainerInner,
  articleDetailContent,
  articleDetailSidebar,
  articleDetailTitle,
  articleDetailTitleContainer,
} from './styles/articleDetail.css'
import { Article, TableOfContent } from '@/types'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export const fetchArticleDetail = async (id: string): Promise<Article> => {
  const articleDetail = await UseFetchArticleDetail(id)
  return articleDetail
}

const notoSansJpThin = Noto_Sans_JP({
  weight: '100',
  subsets: ['latin'],
})

const notoSansJpBold = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
})

const ZenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
  weight: '400',
  subsets: ['latin'],
})

export const ArticleDetail = (props: { article: Article; tableOfContent: TableOfContent[] }) => {
  return (
    <section className={articleDetailContainer}>
      <div className={articleDetailContainerInner}>
        <article className={[articleDetailBody, notoSansJpThin.className].join(' ')}>
          <div className={articleDetailTitleContainer}>
            <h2 className={[notoSansJpBold.className, articleDetailTitle].join(' ')}>
              {props.article.title}
            </h2>
          </div>
          <div
            className={['znc', articleDetailContent].join(' ')}
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(props.article.content, {
                embedOrigin: 'https://embed.zenn.studio',
              }),
            }}
            style={assignInlineVars({
              fontFamily: ZenKakuGothicAntique.style.fontFamily,
            })}
          ></div>
          <div className={articleDetailSidebar}>
            <ArticleDetailSidebar article={props.article} tableOfContent={props.tableOfContent} />
          </div>
        </article>
      </div>
    </section>
  )
}
