import { globalStyle, style } from '@vanilla-extract/css'

const headerHeight = '100px'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: headerHeight,
  paddingLeft: '20px',
  backdropFilter: 'blur(10px)',
  zIndex: '1000',
  boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.1)',
})

export const leftHeader = style({
  display: 'flex',
  alignItems: 'center',
})

export const blogIcon = style({
  borderRadius: '50%',
})

export const blogTitleWrapper = style({
  textDecoration: 'none',
})

export const blogTitle = style({
  marginLeft: '10px',
  fontSize: '48px',
  fontWeight: 'lighter',
  color: '#555',
})

export const rightHeader = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: headerHeight,
  height: headerHeight,
  backgroundColor: '#333',
  cursor: 'pointer',
  transition: '.2s',
  zIndex: '1000000',
  ':hover': {
    backgroundColor: 'white',
  },
})

export const menuIcon = style({
  width: `calc(${headerHeight} * 0.65)`,
  height: `calc(${headerHeight} * 0.65)`,
  userSelect: 'none',
  transition: '.2s',
})

globalStyle(`${rightHeader}:hover > ${menuIcon}`, {
  filter: 'drop-shadow(0px 0px 2px #000)',
})
