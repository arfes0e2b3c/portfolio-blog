import { globalStyle, style } from '@vanilla-extract/css'

const containerWidth = '1280px'

const topMargin = '50px'

const titleHeight = '100px'

const contentWidthRatio = 0.75
const sidebarWidthRatio = 1 - contentWidthRatio

export const articleDetailContainer = style({
  position: 'relative',
  marginTop: topMargin,
})

export const articleDetailContainerInner = style({
  position: 'relative',
  width: containerWidth,
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const articleDetailBody = style({
  width: '100%',
})

export const articleDetailTitleContainer = style({
  height: titleHeight,
})

export const articleDetailTitle = style({
  width: '100%',
  fontSize: '1.8rem',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.3rem',
      padding: '0 10px',
    },
  },
})

export const articleDetailContent = style({
  width: `calc(${contentWidthRatio} * 100%)`,
  padding: '70px',
  boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
  borderRadius: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '20px',
    },
  },
})

globalStyle(`${articleDetailBody} strong`, {
  fontWeight: 'bold !important',
})

globalStyle(`${articleDetailContent} h1, ${articleDetailContent} h2 `, {
  paddingTop: '110px',
  marginTop: '-110px',
})

export const articleDetailSidebar = style({
  position: 'absolute',
  top: titleHeight,
  left: `calc(${contentWidthRatio} * 100%)`,
  width: `calc(${containerWidth} * ${sidebarWidthRatio} - 0px)`,
  marginLeft: '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'relative',
      top: '0',
      left: '0',
      width: '100%',
      padding: '0 10px',
      margin: '0',
      marginTop: '10px',
    },
  },
})
