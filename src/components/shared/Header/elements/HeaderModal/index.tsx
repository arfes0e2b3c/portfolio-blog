import { animated, easings, useSpring, useTrail } from '@react-spring/web'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	headerModal,
	headerModalTitle,
	menuContainer,
	menuLink,
	menuLinkActive,
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
		title: 'READ',
		path: '/read',
	},
	{
		id: 4,
		title: 'QUIZ',
		path: '/quiz',
	},
]

export const HeaderModal = (props: {
	toggleModal: () => void
	isOpen: boolean
}) => {
	const router = useRouter()
	const toggleModal = () => {
		props.toggleModal()
	}

	const isActive = (path: string) => {
		if (path === '/') return router.pathname === '/'
		return router.pathname.startsWith(path)
	}

	const { modalSpring } = useSpring({
		from: { modalSpring: 0 },
		modalSpring: props.isOpen ? 1 : 0,
		config: { duration: 300, easing: easings.easeOutQuad },
	})
	const liSprings = useTrail(menus.length, {
		from: { liSprings: 0 },
		liSprings: props.isOpen ? 1 : 0,
		config: { duration: 200, easing: easings.easeOutQuad },
		delay: 200,
	})

	return (
		<animated.section
			className={headerModal}
			style={{
				opacity: modalSpring.to({ range: [0, 1], output: [0.1, 1] }),
				y: modalSpring.to({ range: [0, 0.001, 1], output: [-2000, -20, 0] }),
			}}
		>
			<h2 className={headerModalTitle}>Menu</h2>
			<ul className={menuContainer}>
				{liSprings.map(({ liSprings, ...rest }, index) => {
					return (
						<animated.li
							className={menuList}
							key={menus[index].id}
							style={{
								opacity: liSprings.to({ range: [0, 1], output: [0.1, 1] }),
								x: liSprings.to({ range: [0, 1], output: [-80, 0] }),
							}}
						>
							<Link
								className={`${menuLink} ${isActive(menus[index].path) ? menuLinkActive : ''}`}
								href={menus[index].path}
								onClick={toggleModal}
							>
								{menus[index].title}
							</Link>
						</animated.li>
					)
				})}
			</ul>
		</animated.section>
	)
}
