import Image from 'next/image'
import Link from 'next/link'
import {
	blogIcon,
	blogTitle,
	footer,
	lowerFooter,
	menuLink,
	upperFooter,
	upperLeftFooter,
} from './styles/footer.css'

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
]

export const Footer = () => {
	return (
		<footer className={footer}>
			<div className={upperFooter}>
				<div className={upperLeftFooter}>
					<Link href='/'>
						<Image
							className={blogIcon}
							src='/images/yata_icon.jpg'
							alt='やたのアイコン画像'
							width={80}
							height={80}
						/>
					</Link>
					<h2 className={blogTitle}>ARFES</h2>
				</div>
				<div>
					{menus.map((menu) => {
						return (
							<Link className={menuLink} key={menu.id} href={menu.path}>
								{menu.title}
							</Link>
						)
					})}
				</div>
			</div>
			<div className={lowerFooter}>
				<p>©︎YATA YUKI ALL RIGHTS RESERVED.</p>
			</div>
		</footer>
	)
}
