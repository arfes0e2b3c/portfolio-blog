import { style } from '@vanilla-extract/css'

const historyNum = 11

export const profileContainer = style({
	height: `${1350 + (historyNum - 11) * 100}px`,
})

export const profileHead = style({
	position: 'sticky',
	height: 'fit-content',
	top: 'calc((100vh - 100px) / 2 + 100px)',
	left: '0',
	transform: 'translateY(-50%)',
	zIndex: 1,
	'@media': {
		'screen and (max-width: 768px)': {
			position: 'relative',
			top: '0',
			left: '0',
			width: '100%',
		},
	},
})

export const profileBody = style({
	position: 'absolute',
	top: '100px',
	left: '0',
	width: '100%',
})

export const recentPostContainer = style({})

export const skillContainer = style({
	position: 'absolute',
	top: `${2000 + (historyNum - 11) * 100}px`,
	height: '1337px',
	width: '100%',
})

export const skillHead = style({
	position: 'sticky',
	height: 'fit-content',
	top: 'calc((100vh - 100px) / 2 + 100px)',
	left: '0',
	transform: 'translateY(-50%)',
	'@media': {
		'screen and (max-width: 768px)': {
			position: 'relative',
			top: '0',
			left: '0',
			width: '100%',
		},
	},
})

export const skillBody = style({
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
})

export const productContainer = style({
	position: 'absolute',
	top: `${3500 + (historyNum - 11) * 100}px`,
	height: '2066px',
	width: '100%',
})

export const productHead = style({
	position: 'sticky',
	height: 'fit-content',
	top: 'calc((100vh - 100px) / 2 + 100px)',
	left: '0',
	transform: 'translateY(-50%)',
	'@media': {
		'screen and (max-width: 768px)': {
			position: 'relative',
			top: '0',
			left: '0',
			width: '100%',
		},
	},
})

export const productBody = style({
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
})
