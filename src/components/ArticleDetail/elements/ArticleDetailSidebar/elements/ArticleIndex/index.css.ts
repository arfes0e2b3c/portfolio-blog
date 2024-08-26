import { globalStyle, style } from '@vanilla-extract/css'

export const articleIndexContainer = style({
	padding: '10px 15px',
	marginTop: '20px',
	boxSizing: 'border-box',
	boxShadow:
		'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
	borderRadius: '10px',
	maxHeight: 'calc(100vh - 100px - 300px)',
	overflowY: 'scroll',
})

export const indexTitle = style({
	margin: '15px 0 15px 0',
})

export const articleIndexList = style({
	position: 'relative',
	listStyle: 'none',
	padding: 0,
	margin: 0,
	':before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '9.5px',
		transform: 'translateY(-50%)',
		display: 'block',
		width: '1px',
		height: 'calc(100% - 15px)',
		backgroundColor: '#ddd',
	},
})

export const indexH1 = style({
	position: 'relative',
	fontSize: '14px',
	fontWeight: 'bold',
	marginTop: '5px',
	paddingLeft: '30px',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	':before': {
		content: '',
		width: '12px',
		height: '12px',
		borderRadius: '50%',
		backgroundColor: '#999',
		position: 'absolute',
		top: '50%',
		left: '0',
		transform: 'translateY(-50%)',
		marginLeft: '4px',
		transition: '0.2s',
		border: '1px solid white',
	},
})

export const indexH2 = style({
	position: 'relative',
	fontSize: '14px',
	marginTop: '5px',
	paddingLeft: '45px',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	':before': {
		content: '',
		width: '6px',
		height: '6px',
		borderRadius: '50%',
		backgroundColor: '#999',
		position: 'absolute',
		top: '50%',
		left: '3px',
		transform: 'translateY(-50%)',
		marginLeft: '4px',
		border: '1px solid white',
	},
})

globalStyle(`${indexH1}:hover:before, ${indexH2}:hover:before`, {
	boxShadow: '0 0 5px #0234e5',
})

export const indexLink = style({
	textDecoration: 'none',
	transition: '0.2s',
	color: '#333',
	':hover': {
		opacity: 0.7,
	},
})

export const isCurrent = style({
	':before': {
		backgroundColor: '#89abe5',
		boxShadow: '0 0 5px #0234e5',
	},
})

globalStyle(`${isCurrent} ${indexLink}`, {
	color: '#89abe5',
})

export const aa = style({})
