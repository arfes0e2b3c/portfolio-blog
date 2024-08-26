import { globalStyle, style } from '@vanilla-extract/css'

const headerHeightLg = '100px'
const headerHeightSm = '70px'

export const header = style({
	display: 'flex',
	justifyContent: 'space-between',
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100%',
	height: headerHeightLg,
	paddingLeft: '20px',
	backdropFilter: 'blur(10px)',
	backgroundColor: 'rgba(255, 255, 255, 0.8)',
	zIndex: '1000',
	boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.1)',
	'@media': {
		'screen and (max-width: 768px)': {
			height: headerHeightSm,
		},
	},
})

export const leftHeader = style({
	display: 'flex',
	alignItems: 'center',
})

export const blogIcon = style({
	borderRadius: '50%',
	'@media': {
		'screen and (max-width: 768px)': {
			width: headerHeightSm,
			height: headerHeightSm,
		},
	},
})

export const blogTitleWrapper = style({
	textDecoration: 'none',
})

export const blogTitle = style({
	margin: '0',
	marginLeft: '10px',
	fontSize: '48px',
	fontWeight: 'lighter',
	color: '#555',
	'@media': {
		'screen and (max-width: 768px)': {
			fontSize: '32px',
		},
	},
})

export const rightHeader = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: headerHeightLg,
	height: headerHeightLg,
	backgroundColor: '#333',
	cursor: 'pointer',
	transition: '.2s',
	zIndex: '1000000',
	':hover': {
		backgroundColor: 'white',
	},
	'@media': {
		'screen and (max-width: 768px)': {
			width: headerHeightSm,
			height: headerHeightSm,
		},
	},
})

export const menuIcon = style({
	width: `calc(${headerHeightLg} * 0.65)`,
	height: `calc(${headerHeightLg} * 0.65)`,
	userSelect: 'none',
	transition: '.2s',
	'@media': {
		'screen and (max-width: 768px)': {
			width: `calc(${headerHeightSm} * 0.65)`,
			height: `calc(${headerHeightSm} * 0.65)`,
		},
	},
})

globalStyle(`${rightHeader}:hover > ${menuIcon}`, {
	filter: 'drop-shadow(0px 0px 2px #000)',
})
