import { style } from '@vanilla-extract/css'

const cardWidth = 450
const imageRatio = 630 / 1200

export const articleCard = style({
  width: cardWidth + 'px',
  height: cardWidth * imageRatio + 'px',
  margin: '10px',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, 0.05)',
  transition: '.2s',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#333',
  ':hover': {
    boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.1)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '10px',
      width: '100%',
      height: 'auto',
    },
  },
})

export const articleImageContainer = style({
  position: 'relative',
  width: '100%',
})

export const articleImage = style({
  width: '100%',
  height: `calc( ${cardWidth} * ${imageRatio}px)`,
  '@media': {
    'screen and (max-width: 768px)': {
      height: 'auto',
    },
  },
})

export const articleCreatedAt = style({
  position: 'absolute',
  top: '8px',
  left: '6px',
  padding: '5px 20px',
  margin: '0',
  backgroundColor: 'rgba(0,0,0,0.3)',
  backdropFilter: 'blur(8px)',
  color: 'white',
  border: '1px solid #666',
  borderRadius: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      top: '10px',
      left: '10px',
      fontSize: '0.8rem',
    },
  },
})
