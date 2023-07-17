import { style } from '@vanilla-extract/css'

export const recentPost = style({
})

export const articleContainer = style({
  display: 'flex',
  justifyContent: 'center',
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
    'screen and (max-width: 400px)': {
      top: '20%',
    },
  },
})

export const linkContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '1390px',
  margin: '10px auto',
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
})
