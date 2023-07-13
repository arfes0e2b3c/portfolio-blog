import { style } from '@vanilla-extract/css'

export const productBody = style({
  width: '50%',
  marginLeft: '50%',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      marginLeft: '0',
    },
  },
})

export const productList = style({
  width: '640px',
  padding: '0',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const productItem = style({
  width: '320px',
  listStyle: 'none',
  marginTop: '50px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})
