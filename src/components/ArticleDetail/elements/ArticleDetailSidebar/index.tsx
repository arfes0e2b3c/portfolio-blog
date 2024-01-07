import { Article, TableOfContent } from '@/types'
import Image from 'next/image'
import {
  articleDetailSidebar,
  authoInfoContainer,
  authorIcon,
  description,
  fixed,
  fullName,
  iconContainer,
  lowerContainer,
  upperContainer,
  upperRightContainer,
} from './styles/articleDetailSidebar.css'
import { ArticleInfo } from './elements/ArticleInfo'
import { ArticleIndex } from './elements/ArticleIndex'
import { useState, useEffect } from 'react'

export const ArticleDetailSidebar = (props: {
  article: Article
  tableOfContent: TableOfContent[]
}) => {
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const limitY = 395

      setIsFixed(scrollY > limitY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className={articleDetailSidebar}>
      <div className={authoInfoContainer}>
        <div className={upperContainer}>
          <Image
            className={authorIcon}
            src='/images/yata_icon.jpg'
            alt='やたのアイコン画像'
            width={80}
            height={80}
          />
          <div className={upperRightContainer}>
            <h3 className={fullName}>YUKI YATA</h3>
            <div className={iconContainer}>
              <a href='https://github.com/arfes0e2b3c' target='_blank'>
                <Image
                  src='/icons_sns/github.svg'
                  alt='githubのアイコン画像'
                  width={25}
                  height={25}
                />
              </a>
              <a href='https://x.com/0e2b3c' target='_blank'>
                <Image src='/icons_sns/x.svg' alt='xのアイコン画像' width={25} height={25} />
              </a>
              <a href='https://zenn.dev/arfes' target='_blank'>
                <Image src='/icons_sns/zenn.svg' alt='zennのアイコン画像' width={25} height={25} />
              </a>
            </div>
          </div>
        </div>
        <div className={lowerContainer}>
          <p className={description}>
            横浜国立大学経営学部３年
            <br />
            フロントエンドエンジニアを目指しています。
            <br />
            Vue / Nuxt / React / Next / Laravel
          </p>
        </div>
      </div>
      <div className={isFixed ? fixed : ''}>
        <ArticleInfo article={props.article} />
        <ArticleIndex tableOfContent={props.tableOfContent} />
      </div>
    </section>
  )
}
