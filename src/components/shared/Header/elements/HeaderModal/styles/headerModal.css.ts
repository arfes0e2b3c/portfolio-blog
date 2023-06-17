import { globalStyle, style } from '@vanilla-extract/css'

export const headerModal = style({
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
  zIndex: '10000',
})

export const headerModalTitle = style({
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '64px',
  fontWeight: 'lighter',
  userSelect: 'none',
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    borderBottom: '1px solid #333',
  },
  '@media': {
    'screen and (max-width: 400px)': {
      top: '20%',
    },
  },
})

export const menuContainer = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '0',
  userSelect: 'none',
})

export const menuList = style({
  listStyle: 'none',
  textAlign: 'center',
})

export const menuLink = style({
  margin: '10px 0',
  textDecoration: 'none',
  fontSize: '2rem',
  color: '#333',
})
