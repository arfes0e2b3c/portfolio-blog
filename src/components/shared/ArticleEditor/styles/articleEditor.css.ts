import { style } from '@vanilla-extract/css'

export const editorHeader = style({
	display: 'flex',
	justifyContent: 'space-around',
	width: '100%',
	height: '60px',
	margin: '30px 0',
})

export const titleInput = style({
	width: '60%',
	padding: '0px 40px',
	color: '#333',
	border: 'none',
	borderBottom: '2px solid rgba(0,0,0,0.05)',
	fontSize: '1.6em',
	outline: 'none',
})

export const buttonContainer = style({
	display: 'flex',
	alignItems: 'flex-end',
})

export const saveDraftButton = style({
	padding: '10px 20px',
	textDecoration: 'none',
	backgroundColor: '#333',
	color: '#fff',
	border: '1px solid rgba(0,0,0,0.4)',
	borderRadius: '5px',
	transition: '.3s',
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#fff',
		color: '#333',
	},
})

export const publishButton = style({
	padding: '10px 20px',
	marginLeft: '15px',
	textDecoration: 'none',
	backgroundColor: '#333',
	color: '#fff',
	border: '1px solid rgba(0,0,0,0.4)',
	borderRadius: '5px',
	transition: '.3s',
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#fff',
		color: '#333',
	},
})

export const isSuccess = style({
	color: '#007B49',
})

export const isError = style({
	color: '#ED1A3D',
})

export const editorContainer = style({
	width: '100%',
	display: 'flex',
	margin: '0 auto',
})

export const editorTextarea = style({
	width: '50%',
	height: '70vh',
	padding: '30px',
	marginLeft: '20px',
	boxShadow:
		'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',

	border: 'none',
	borderRadius: '10px',
	outline: 'none',
	fontSize: '1.2em',
})
