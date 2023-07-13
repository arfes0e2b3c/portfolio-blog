import { style } from '@vanilla-extract/css'

export const skillBody = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

export const skillBodyInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const skillContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '640px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const skillTitle = style({
  position: 'relative',
  fontSize: '2em',
  fontWeight: '100',
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    borderBottom: '2px solid #777',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '20px 0 10px'
    },
  },
})

export const skillList = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingLeft: '0',
  padding: '0 20px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 10px',
    },
  },
})

export const skillItem = style({
  listStyle: 'none',
  margin: '5px 10px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '30%',
      margin: '5px',
      boxSizing: 'border-box',
    },
  },
})
