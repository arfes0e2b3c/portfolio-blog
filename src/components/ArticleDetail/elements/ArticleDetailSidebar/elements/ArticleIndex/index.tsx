import { TableOfContent } from '@/types'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import {
	aa,
	articleIndexContainer,
	articleIndexList,
	indexH1,
	indexH2,
	indexLink,
	indexTitle,
	isCurrent,
} from './index.css'

const ZenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
	weight: ['400', '500'],
	subsets: ['latin'],
})

export const ArticleIndex = (props: { tableOfContent: TableOfContent[] }) => {
	const hrefs = props.tableOfContent.map((anchor) => anchor.href.slice(1))
	return (
		<div
			className={articleIndexContainer}
			style={assignInlineVars({
				fontFamily: ZenKakuGothicAntique.style.fontFamily,
			})}
		>
			<h3 className={indexTitle}>目次</h3>
			<Scrollspy
				items={hrefs}
				className={articleIndexList}
				componentTag='ul'
				currentClassName={isCurrent}
			>
				{props.tableOfContent.map((anchor: TableOfContent) => {
					if (anchor.level === 'H1') {
						return (
							<li className={indexH1} key={anchor.href}>
								<a
									className={indexLink}
									href={anchor.href}
									ref={React.createRef()}
								>
									{anchor.title}
								</a>
							</li>
						)
					}
					return (
						<li className={indexH2} key={anchor.href} ref={React.createRef()}>
							<a className={indexLink} href={anchor.href}>
								{anchor.title}
							</a>
						</li>
					)
				})}
			</Scrollspy>
		</div>
	)
}
