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
import {
  productBody,
  productContainer,
  productHead,
  profileBody,
  profileContainer,
  profileHead,
  skillBody,
  skillContainer,
  skillHead,
} from './index.css'
export const Index = (props: { articleList: ArticleResponse }) => {
  const [displayWidth, setDisplayWidth] = useState(1920)
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const limitY = 100000

      setIsFixed(scrollY < limitY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
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
  const addParallax = 0.5
  if (displayHeight > 960) {
    parallaxNums = {
      pages: 6.5 + addParallax,
      profileHead: {
        start: 0,
        end: 0.3 + addParallax,
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
        <div className={profileContainer}>
          <div className={profileHead}>
            <ProfileHead />
          </div>
          <div className={profileBody}>
            <ProfileBody />
          </div>
        </div>
        <div>
          <RecentPost articleList={articleList ?? []} />
        </div>
        <div className={skillContainer}>
          <div className={skillHead}>
            <SkillHead />
          </div>
          <div className={skillBody}>
            <SkillBody />
          </div>
        </div>
        <div className={productContainer}>
          <div className={productHead}>
            <ProductHead />
          </div>
          <div className={productBody}>
            <ProductBody />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <ProfileHead />
        <ProfileBody />
        <RecentPost articleList={articleList ?? []} />
        <SkillBody />
        <ProductHead />
        <ProductBody />
      </>
    )
  }
}
