import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  articleDetailSidebar,
  articleInfoContainer,
  articleInfoItem,
  articleInfoList,
  authoInfoContainer,
  authorIcon,
  description,
  fixed,
  fullName,
  iconContainer,
  itemLabel,
  labelContainer,
  lowerContainer,
  upperContainer,
  upperRightContainer,
} from './styles/articleDetailSidebar.css'
import { Article } from '@/types'
import { formatTime2Ymd } from '@/utils/function'
export const ArticleDetailSidebar = (props: { article: Article }) => {
  const article = props.article
  article.publishedAt = formatTime2Ymd(article.publishedAt)
  article.updatedAt = formatTime2Ymd(article.updatedAt)

  const articleData = [
    {
      key: 1,
      img_path: 'author.svg',
      label: '著者名',
      content: 'やた',
    },
    {
      key: 2,
      img_path: 'calendar.svg',
      label: '公開日',
      content: article.publishedAt,
    },
    {
      key: 3,
      img_path: 'recycle.svg',
      label: '更新日',
      content: article.updatedAt,
    },
    {
      key: 4,
      img_path: 'memo.svg',
      label: '文字数',
      content: `約${article.content.length}字`,
    },
  ]

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
            src='/yata_icon.jpg'
            alt='やたのアイコン画像'
            width={80}
            height={80}
          />
          <div className={upperRightContainer}>
            <h3 className={fullName}>YUKI YATA</h3>
            <div className={iconContainer}>
              <Link href='https://github.com/arfes0e2b3c'>
                <Image
                  src='/icons_sns/github.svg'
                  alt='githubのアイコン画像'
                  width={25}
                  height={25}
                />
              </Link>
              <Link href='https://twitter.com/0e2b3c'>
                <Image
                  src='/icons_sns/twitter.svg'
                  alt='twitterのアイコン画像'
                  width={25}
                  height={25}
                />
              </Link>
              <Link href='https://zenn.dev/arfes'>
                <Image src='/icons_sns/zenn.svg' alt='zennのアイコン画像' width={25} height={25} />
              </Link>
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
      <div className={[articleInfoContainer, isFixed ? fixed : ''].join(' ')}>
        <ul className={articleInfoList}>
          {articleData.map((item) => {
            return (
              <li className={articleInfoItem} key={item.key}>
                <div className={labelContainer}>
                  <Image
                    src={`/icons_common/${item.img_path}`}
                    alt={`${item.label}の画像`}
                    width={30}
                    height={30}
                  />
                  <p className={itemLabel}>{item.label}</p>
                </div>
                <p>{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
