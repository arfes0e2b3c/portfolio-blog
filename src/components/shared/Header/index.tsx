import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderModal } from './elements/HeaderModal'
import {
  blogTitle,
  blogTitleWrapper,
  header,
  leftHeader,
  menuIcon,
  rightHeader,
} from './styles/header.css'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleModal() {
    setIsOpen(!isOpen)
  }
  return (
    <header className={header}>
      <div className={leftHeader}>
        <Link href='/'>
          <Image src='/yata_icon.jpg' alt='アイコン画像' width={80} height={80} />
        </Link>
        <Link className={blogTitleWrapper} href='/'>
          <h1 className={blogTitle}>ARFES</h1>
        </Link>
      </div>
      <div className={rightHeader} onClick={toggleModal}>
        <Image
          className={menuIcon}
          src={isOpen ? '/close.svg' : '/menu_icon.svg'}
          alt='ハンバーガーメニュー'
          width={100}
          height={100}
        />
      </div>
      {isOpen && <HeaderModal />}
    </header>
  )
}
