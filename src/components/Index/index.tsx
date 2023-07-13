import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useQuery } from 'react-query'
import { ProductHead } from './elements/ProductHead'
import { ProfileBody } from './elements/ProfileBody'
import { ProfileHead } from './elements/ProfileHead'
import { RecentPost } from './elements/RecentPost'
import { SkillBody } from './elements/SkillBody'
import { SkillHead } from './elements/SkillHead'
import { ProductBody } from './elements/productBody'
import { UseFetchArticleList } from '@/hooks/articleListHooks'
import { ArticleResponse } from '@/types'
export const Index = (props: { articleList: ArticleResponse }) => {
  const {
    data: result,
    isLoading,
    isError,
  } = useQuery('user-articles', UseFetchArticleList, {
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
  const minusZIndex = { zIndex: '-1' }
  const plusZIndex = { zIndex: '1' }
  return (
    <>
      <Parallax pages={5.4}>
        <ParallaxLayer sticky={{ start: 0, end: 0.25 }}  factor={2.2}>
          <ProfileHead/>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <ProfileBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.85, end: 0.85 }} offset={1.0} factor={0.5} style={plusZIndex}>
          <RecentPost articleList={articleList ?? []}/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.0, end: 2.25 }} style={minusZIndex}>
          <SkillHead />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.4, end: 1.4 }} style={plusZIndex}>
          <SkillBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2.5, end: 4.5 }} style={minusZIndex}>
          <ProductHead />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9}>
          <ProductBody />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
