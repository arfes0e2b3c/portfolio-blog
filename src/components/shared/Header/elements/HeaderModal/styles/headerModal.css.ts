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
  display: 'inline-block',
  width: '200px',
  margin: '2px 0',
  padding: '6px 0',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '2rem',
  color: '#333',
  borderRadius: '6px',
  transition: 'color 0.2s, background-color 0.2s',
  ':hover': {
    color: '#89abe5',
    backgroundColor: 'rgba(137, 171, 229, 0.08)',
  },
})

export const menuLinkActive = style({
  color: '#89abe5',
  backgroundColor: 'rgba(137, 171, 229, 0.08)',
})
