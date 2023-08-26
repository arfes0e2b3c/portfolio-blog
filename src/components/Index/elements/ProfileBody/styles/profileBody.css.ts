import { style } from '@vanilla-extract/css'

export const profileBodyWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

export const profileBody = style({
  display: 'flex',
  justifyContent: 'center',
  width: '640px',
  padding: '0',
  marginRight: 'calc(50vw - 640px)',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      marginRight: '0',
    },
  },
})

export const profileBodyInner = style({})

export const historyItem = style({
  position: 'relative',
  marginTop: '40px',
  listStyle: 'none',
  selectors: {
    '&:nth-last-child(n+2):after': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '39px',
      width: '0px',
      height: 'calc(100%)',
      borderLeft: '2px solid #ddd',
      zIndex: '-1',
    },
  },
  '@media': {
    'screen and (max-width: 768px)': {
      marginTop: '20px',
    },
  },
})
export const historyItemInner = style({
  display: 'flex',
})

export const companyImageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '75px',
  borderRadius: '50%',
  boxShadow: '0 0 5px 2px rgba(0,0,0,0.1)',
  marginRight: '20px',
  overflow: 'hidden',
  backgroundColor: 'white',
})

export const companyImage = style({
  width: '75px',
  height: '75px',
})

export const companyName = style({
  margin: '0',
  fontSize: '1.3em',
})

export const job = style({
  margin: '0',
})

export const period = style({
  margin: '0',
  color: '#aaa',
  fontWeight: 'bold',
})
