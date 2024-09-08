import { globalStyle, style } from '@vanilla-extract/css'

export const articleDetailSidebar = style({
	position: 'relative',
	width: '100%',
	height: 'calc(100% - 100px)',
})

export const authoInfoContainer = style({
	padding: '30px',
	boxSizing: 'border-box',
	boxShadow:
		'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
	borderRadius: '10px',
})

export const upperContainer = style({
	display: 'flex',
})

export const authorIcon = style({
	border: '1px solid #eeeeee',
	borderRadius: '50%',
})

export const upperRightContainer = style({
	width: 'calc(100% - 80px)',
})

export const fullName = style({
	margin: '0',
	fontSize: '1.5em',
	textAlign: 'center',
})

export const iconContainer = style({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	padding: '5px 20px',
})

export const lowerContainer = style({})

export const description = style({
	marginTop: '10px',
	marginBottom: '0',
})

const containerWidth = '1280px'

const contentWidthRatio = 0.75

export const stickySidebarContainer = style({
	position: 'sticky',
	top: '100px',
	left: `calc(${containerWidth} * ${contentWidthRatio} + (100% - ${containerWidth}) / 2 + 20px)`,
	width: `calc(${containerWidth} * (1 - ${contentWidthRatio}))`,
	paddingTop: '10px',
	'@media': {
		'screen and (max-width: 768px)': {
			position: 'relative',
			top: '0',
			left: '0',
			width: '100%',
		},
	},
})
