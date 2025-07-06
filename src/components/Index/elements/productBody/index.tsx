import { ProductCard } from './elements/ProductCard'
import { productBody, productItem, productList } from './styles/productBody.css'

const products = [
  {
    title: 'ポートフォリオブログ',
    href: '/',
    imageSrc: '/images/portfolio-blog.png',
  },
  {
    title: 'お手伝いサークル公式サイト',
    href: 'https://otetsudai-circle.com',
    imageSrc: '/images/otetsudai-circle.png',
  },
  // {
  // 	title: 'YouTube動画詳細検索サイト',
  // 	href: 'https://graceful-macaron-f9227c.netlify.app/',
  // 	imageSrc: '/images/youtube.png',
  // },
  {
    title: '授業支援システム拡張機能',
    href: 'https://chrome.google.com/webstore/detail/lmsmultithemeextension/jdelbhmaojahbppkipjgoncocphpmokj',
    imageSrc: '/images/lms.png',
  },
  // {
  // 	title: '人口統計サイト',
  // 	href: 'https://pref-population.vercel.app/',
  // 	imageSrc: '/images/pref-population.png',
  // },
]

export const ProductBody = () => {
  return (
    <section className={productBody}>
      <ul className={productList}>
        {products.map((prod) => {
          return (
            <li className={productItem} key={prod.title}>
              <ProductCard href={prod.href} imageSrc={prod.imageSrc} title={prod.title} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
