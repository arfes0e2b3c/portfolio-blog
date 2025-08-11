import { style } from '@vanilla-extract/css'

export const talkAndEventBodyWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

export const talkAndEventBody = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '0',
  marginLeft: 'calc(50vw - 440px)',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      marginRight: '0',
    },
  },
})

export const talkAndEventBodyInner = style({
  padding: '0',
  marginInline: '40px',
  maxWidth: 'calc(100% - 80px)',
  overflow: 'hidden',
})

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
      // borderLeft: '2px solid #ddd',
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
  width: '86px',
  height: '81px',
  borderRadius: '50%',
  // boxShadow: '0 0 5px 2px rgba(0,0,0,0.1)',
  border: '1px solid #eee',
  padding: '3px',
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
  marginBlock: '5px',
  fontSize: '1.3em',
  lineHeight: '1.1',
  borderBottom: '1px solid #ccc',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: 'bold',
})

export const job = style({
  margin: '0',
})

export const period = style({
  margin: '0',
  color: '#aaa',
  fontWeight: 'bold',
})

export const link = style({
  textDecoration: 'none',
  color: 'inherit',
})
