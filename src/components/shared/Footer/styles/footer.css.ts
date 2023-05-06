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
})

export const blogIcon = style({
  boxShadow: '0 0 5px 1px rgba(0,0,0,0.1)',
  borderRadius: '50%',
})

export const blogTitle = style({
  margin: '0px 0',
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
  fontSize: '32px',
  textDecoration: 'none',
  color: '#333',
})
