import { style } from '@vanilla-extract/css'

export const htmlResult = style({
	width: '50%',
	height: '70vh',
	overflow: 'scroll',
	padding: '30px',
	boxShadow:
		'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
	border: 'none',
	borderRadius: '10px',
})
