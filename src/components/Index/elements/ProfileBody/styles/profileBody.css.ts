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
})

export const profileBodyInner = style({})

export const historyItem = style({
  position: 'relative',
  marginTop: '40px',
  listStyle: 'none',
  selectors: {
    '&:nth-child(n+2):after': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '39px',
      transform: 'translateY(-100%)',
      width: '0px',
      height: '100%',
      borderLeft: '2px solid #ddd',
      zIndex: '-1',
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
  borderRadius: '50%',
  boxShadow: '0 0 5px 2px rgba(0,0,0,0.1)',
  marginRight: '20px',
  overflow: 'hidden',
  backgroundColor: '#333',
})

export const companyImage = style({
  width: '40px',
  height: '40px',
})

export const companyName = style({
  margin: '0',
  fontSize: '1.3em',
})

export const companyLink = style({
  color: '#333',
  textDecoration: 'none',
})

export const job = style({
  margin: '0',
})

export const period = style({
  margin: '0',
  color: '#aaa',
  fontWeight: 'bold',
})
