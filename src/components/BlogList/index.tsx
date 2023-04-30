import { GetStaticPropsResult } from 'next'

export const getStaticProps = async (): Promise<GetStaticPropsResult<BlogProps>> => {
  const articleList = await Promise.all([
    getArticleList.handler({
      filters: createArticleFilter({ category: 'recently' }),
    }),
  ])
}

export const BlogList = () => {
  return <p>BLOG LIST</p>
}
