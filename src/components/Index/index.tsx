import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useState } from 'react'
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
  const [displayWidth, setDisplayWidth] = useState(1920)
  useEffect(() => {
    setDisplayWidth(window.innerWidth)
  }, [])
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
  if (displayWidth > 768) {
  return (
      <>
        <Parallax pages={6.5}>
          <ParallaxLayer sticky={{ start: 0, end: 0.45 }}>
            <ProfileHead/>
          </ParallaxLayer>
          <ParallaxLayer offset={0}>
            <ProfileBody />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1.0, end: 1.0 }} style={plusZIndex}>
          <RecentPost articleList={articleList ?? []}/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.2, end: 2.8 }} style={minusZIndex}>
            <SkillHead />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1.6, end: 1.6 }} style={plusZIndex}>
            <SkillBody />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 3.1, end: 5.5 }} style={minusZIndex}>
            <ProductHead />
          </ParallaxLayer>
          <ParallaxLayer offset={3.45}>
            <ProductBody />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } else {
    return (
      <>
        <ProfileHead />
        <ProfileBody />
        <SkillBody />
        <ProductHead />
        <ProductBody />
      </>
    )
  }
}
