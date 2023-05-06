import { globalStyle, style } from '@vanilla-extract/css'

const containerWidth = '1280px'

const topMargin = '50px'

const titleHeight = '130px'

const contentWidthRatio = 0.75
const sidebarWidthRatio = 1 - contentWidthRatio

export const articleDetailContainer = style({
  position: 'relative',
  marginTop: topMargin,
})

export const articleDetailContainerInner = style({
  position: 'relative',
  width: containerWidth,
  height: titleHeight,
  margin: '0 auto',
})

export const articleDetailBody = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
})

export const articleDetailTitle = style({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  fontSize: '1.8rem',
  textAlign: 'center',
})

export const articleDetailContent = style({
  position: 'absolute',
  top: titleHeight,
  width: `calc(${contentWidthRatio} * 100%)`,
  padding: '70px',
  boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
  borderRadius: '10px',
})

globalStyle(`${articleDetailBody} strong`, {
  fontWeight: 'bold !important',
})

export const articleDetailSidebar = style({
  position: 'relative',
  top: titleHeight,
  left: `calc(${contentWidthRatio} * 100%)`,
  width: `calc(${containerWidth} * ${sidebarWidthRatio} - 20px)`,
  marginLeft: '20px',
})
