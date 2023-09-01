import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Pragati_Narrow } from 'next/font/google'
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
import { ArticleResponse, ParallaxNums } from '@/types'
export const Index = (props: { articleList: ArticleResponse }) => {
  const [displayWidth, setDisplayWidth] = useState(1920)
  useEffect(() => {
    setDisplayWidth(window.innerWidth)
  }, [])
  const [displayHeight, setDisplayHeight] = useState(1920)
  useEffect(() => {
    setDisplayHeight(window.innerHeight)
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

  let parallaxNums: ParallaxNums
  const addParallax = 0.1
  if (displayHeight > 960) {
    parallaxNums = {
      pages: 6.5 + addParallax,
      profileHead: {
        start: 0,
        end: 0.25 + addParallax,
      },
      profileBody: 0,
      recentPost: 0.85 + addParallax,
      skillHead: {
        start: 1.0 + addParallax,
        end: 2.3 + addParallax,
      },
      skillBody: 1.4 + addParallax,
      productHead: {
        start: 2.6 + addParallax,
        end: 5.0 + addParallax,
      },
      productBody: 3.0 + addParallax,
    }
  } else if (displayHeight > 780) {
    parallaxNums = {
      pages: 8.5 + addParallax,
      profileHead: {
        start: 0.0,
        end: 0.4 + addParallax,
      },
      profileBody: 0,
      recentPost: 1.0 + addParallax,
      skillHead: {
        start: 1.25 + addParallax,
        end: 2.8 + addParallax,
      },
      skillBody: 1.6 + addParallax,
      productHead: {
        start: 3.2 + addParallax,
        end: 6.5 + addParallax,
      },
      productBody: 3.5 + addParallax,
    }
  } else {
    parallaxNums = {
      pages: 8.5,
      profileHead: {
        start: 0.0,
        end: 0.4,
      },
      profileBody: 0,
      recentPost: 1.0,
      skillHead: {
        start: 1.25,
        end: 2.8,
      },
      skillBody: 1.6,
      productHead: {
        start: 3.2,
        end: 6.5,
      },
      productBody: 3.5,
    }
  }

  if (displayWidth > 768) {
    return (
      <>
        <Parallax pages={parallaxNums.pages}>
          <ParallaxLayer
            sticky={{ start: parallaxNums.profileHead.start, end: parallaxNums.profileHead.end }}
          >
            <ProfileHead />
          </ParallaxLayer>
          <ParallaxLayer offset={parallaxNums.profileBody}>
            <ProfileBody />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: parallaxNums.recentPost, end: parallaxNums.recentPost }}
            style={plusZIndex}
          >
            <RecentPost articleList={articleList ?? []} />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: parallaxNums.skillHead.start, end: parallaxNums.skillHead.end }}
            style={minusZIndex}
          >
            <SkillHead />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: parallaxNums.skillBody, end: parallaxNums.skillBody }}
            style={plusZIndex}
          >
            <SkillBody />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: parallaxNums.productHead.start, end: parallaxNums.productHead.end }}
            style={minusZIndex}
          >
            <ProductHead />
          </ParallaxLayer>
          <ParallaxLayer offset={parallaxNums.productBody}>
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
