import { globalStyle, style } from '@vanilla-extract/css'

export const articleDetailSidebar = style({
  position: 'relative',
  marginLeft: '20px',
  width: '100%',
})

export const authoInfoContainer = style({
  padding: '30px',
  boxSizing: 'border-box',
  boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
  borderRadius: '10px',
})

export const upperContainer = style({
  display: 'flex',
})

export const authorIcon = style({
  border: '1px solid #eeeeee',
  borderRadius: '50%',
})

export const upperRightContainer = style({
  width: 'calc(100% - 80px)',
})

export const fullName = style({
  margin: '0',
  fontSize: '1.5em',
  textAlign: 'center',
})

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '5px 20px',
})

export const lowerContainer = style({})

export const description = style({
  marginTop: '10px',
  marginBottom: '0',
})

export const articleInfoContainer = style({
  padding: '10px 30px',
  marginTop: '20px',
  boxSizing: 'border-box',
  boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
  borderRadius: '10px',
})

const containerWidth = '1280px'

const topMargin = '50px'

const titleHeight = '130px'

const contentWidthRatio = 0.75

export const fixed = style({
  position: 'fixed',
  top: `100px`,
  left: `calc(${containerWidth} * ${contentWidthRatio} + (100% - ${containerWidth}) / 2 + 20px)`,
  width: `calc(${containerWidth} * (1 - ${contentWidthRatio}))`,
})

export const articleInfoList = style({
  width: '100%',
  padding: '0',
  margin: '0',
})

export const articleInfoItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  selectors: {
    '&:last-child': {
      border: 'none',
    },
  },
})

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
})

export const itemLabel = style({
  marginLeft: '8px',
})
