import { createVar, style } from '@vanilla-extract/css'

export const footerTop = createVar()

export const footer = style({
  width: '100%',
  height: '200px',
  paddingTop: '40px',
  marginTop: '50px',
  border: '2px solid rgba(0,0,0,0.05)',
})

export const upperFooter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
})

export const upperLeftFooter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '150px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100px',
    },
  },
})

export const blogIcon = style({
  boxShadow: '0 0 5px 1px rgba(0,0,0,0.1)',
  borderRadius: '50%',
})

export const blogTitle = style({
  margin: '0px 0',
  fontWeight: '100',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
})

export const upperRightFooter = style({
  display: 'flex',
})

export const lowerFooter = style({
  // display: 'flex',
  textAlign: 'center',
})

export const menuLink = style({
  margin: '0 20px',
  padding: '4px 12px',
  fontSize: '32px',
  textDecoration: 'none',
  color: '#333',
  borderRadius: '4px',
  transition: 'color 0.2s, background-color 0.2s',
  ':hover': {
    color: '#89abe5',
    backgroundColor: 'rgba(137, 171, 229, 0.08)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '0 10px',
      fontSize: '18px',
    },
  },
})
