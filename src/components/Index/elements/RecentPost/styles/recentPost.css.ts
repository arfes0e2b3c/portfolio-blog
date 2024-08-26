import { style } from '@vanilla-extract/css'

export const recentPost = style({
	'@media': {
		'screen and (max-width: 768px)': {
			marginLeft: '10px',
		},
	},
})

export const articleWrapper = style({
	width: '100%',
	overflow: 'scroll',
})

export const articleContainer = style({
	display: 'flex',
	justifyContent: 'center',
	minWidth: '1390px',
	'@media': {
		'screen and (max-width: 768px)': {
			minWidth: '900px',
		},
	},
})

export const sectionTitle = style({
	position: 'relative',
	textAlign: 'center',
	fontSize: '2.5em',
	fontWeight: 'lighter',
	userSelect: 'none',
	margin: '50px 0 20px',
	':after': {
		content: '',
		position: 'absolute',
		bottom: '5%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '200px',
		borderBottom: '2px solid #333',
	},
	'@media': {
		'screen and (max-width: 768px)': {
			fontSize: '2.0em',
			top: '20%',
		},
	},
})

export const linkContainer = style({
	display: 'flex',
	justifyContent: 'flex-end',
	width: '1390px',
	margin: '10px auto',
	'@media': {
		'screen and (max-width: 768px)': {
			width: '100%',
		},
	},
})

export const articleLink = style({
	textDecoration: 'none',
	color: '#333',
	border: '1px solid #333',
	padding: '5px 15px',
	borderRadius: '5px',
	transition: '.3s',
	':hover': {
		backgroundColor: '#333',
		color: 'white',
	},
	'@media': {
		'screen and (max-width: 768px)': {
			marginRight: '10px',
		},
	},
})
