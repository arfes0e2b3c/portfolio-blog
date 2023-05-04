import Link from 'next/link'
import {
  headerModal,
  headerModalTitle,
  menuContainer,
  menuLink,
  menuList,
} from './styles/headerModal.css'
import Image from 'next/image'

const menus = [
  {
    key: 1,
    title: 'TOP',
    path: '/',
  },
  {
    key: 2,
    title: 'ARTICLE',
    path: '/article',
  },
  {
    key: 3,
    title: 'CONTACT',
    path: '/contact',
  },
]

export const HeaderModal = () => {
  return (
    <section className={headerModal}>
      <h2 className={headerModalTitle}>Menu</h2>
      <ul className={menuContainer}>
        {menus.map((menu) => {
          return (
            <li className={menuList} key={menu.key}>
              <Link className={menuLink} href={menu.path}>
                {menu.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
