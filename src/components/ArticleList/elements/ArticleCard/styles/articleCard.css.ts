import { style } from '@vanilla-extract/css'

const cardWidth = '600'
const cardHeight = '360'
const imageRatio = `${630 / 1200}`

export const articleCard = style({
  width: cardWidth + 'px',
  height: cardHeight + 'px',
  margin: '20px',
  boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.05)',
  transition: '.2s',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#333',
  ':hover': {
    boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.1)',
  },
})

export const articleImageContainer = style({
  position: 'relative',
  width: '100%',
})

export const articleImage = style({
  width: '100%',
  height: `calc( ${cardWidth} * ${imageRatio}px)`,
})

export const articleCreatedAt = style({
  position: 'absolute',
  top: '20px',
  left: '20px',
  padding: '5px 20px',
  margin: '0',
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '30px',
})

export const articleTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: `calc(${cardHeight}px - ${cardWidth} * ${imageRatio}px)`,
})

export const articleTitle = style({
  width: '100%',
  margin: '0',
  marginLeft: '10px',
  fontWeight: 'lighter',
})
