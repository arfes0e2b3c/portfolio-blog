import { style } from '@vanilla-extract/css'

export const profileBody = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

export const profileBodyInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '640px',
  padding: '0',
})

export const historyItem = style({
  position: 'relative',
  display: 'flex',
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

export const companyImage = style({
  borderRadius: '50%',
  boxShadow: '0 0 5px 2px rgba(0,0,0,0.1)',
  marginRight: '20px',
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
