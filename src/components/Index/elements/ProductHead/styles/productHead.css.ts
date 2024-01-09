import { style } from '@vanilla-extract/css'

export const productHead = style({
  width: '640px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'calc(50vw - 640px)',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      height: 'auto',
      marginLeft: '0',
    },
  },
})

export const productHeadTitle = style({
  position: 'relative',
  fontSize: '3em',
  fontWeight: '100',
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150px',
    borderBottom: '2px solid #777',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '40px 0 15px',
    },
  },
})
