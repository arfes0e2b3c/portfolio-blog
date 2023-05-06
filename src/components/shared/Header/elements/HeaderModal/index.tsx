import Link from 'next/link'
import {
  headerModal,
  headerModalTitle,
  menuContainer,
  menuLink,
  menuList,
} from './styles/headerModal.css'

const menus = [
  {
    id: 1,
    title: 'TOP',
    path: '/',
  },
  {
    id: 2,
    title: 'ARTICLE',
    path: '/article',
  },
  {
    id: 3,
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
            <li className={menuList} key={menu.id}>
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
