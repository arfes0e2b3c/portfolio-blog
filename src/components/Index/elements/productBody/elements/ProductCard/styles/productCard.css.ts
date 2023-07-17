import { style } from '@vanilla-extract/css'

const cardWidth = '600'
const cardHeight = '360'
const imageRatio = `${630 / 1200}`

export const productCardWrapper = style({
  textDecoration: 'none',
})

export const productCard = style({
  width: cardWidth + 'px',
  height: cardHeight + 'px',
  margin: '0 20px',
  boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.05)',
  transition: '.2s',
  cursor: 'pointer',
  color: '#333',
  ':hover': {
    boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.1)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: 'calc(100% - 40px)',
      height: `calc(100% * ${cardHeight} / ${cardWidth})`,
    },
  },
})

export const productImage = style({
  width: '100%',
  height: `calc( ${cardWidth} * ${imageRatio}px)`,
  borderBottom: '1px solid rgba(0,0,0,0.03)',
  '@media': {
    'screen and (max-width: 768px)': {
      height: `calc(100% * ${imageRatio})`,
    },
  },
})

export const productTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: `calc(${cardHeight}px - ${cardWidth} * ${imageRatio}px)`,
})

export const productTitle = style({
  width: '100%',
  margin: '0',
  marginLeft: '10px',
  fontWeight: 'lighter',
})
