import { createVar, globalStyle, style } from '@vanilla-extract/css'

export const filterIndex = createVar()

export const readHistoryInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '1280px',
  margin: '0 auto',
  paddingBottom: '80px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '0 16px 60px',
    },
  },
})

export const readHistoryTitle = style({
  position: 'relative',
  fontSize: '60px',
  textAlign: 'center',
  fontWeight: 100,
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    borderBottom: '2px solid #333',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '40px',
      margin: '20px 0',
    },
  },
})

export const statsRow = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0px',
  marginBottom: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      marginBottom: '16px',
    },
  },
})

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  width: '160px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100px',
    },
  },
})

export const statValue = style({
  fontSize: '2rem',
  fontWeight: 300,
  letterSpacing: '0.02em',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.6rem',
    },
  },
})

export const statLabel = style({
  fontSize: '0.75rem',
  color: '#999',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  textAlign: 'center',
})

export const filterRow = style({
  position: 'relative',
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '20px auto 32px',
  padding: '0',
  gap: '10px',
  ':after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '160px',
    height: '36px',
    backgroundColor: '#333',
    borderRadius: '5px',
    transition: 'all .3s cubic-bezier(0.45, 0, 0.55, 1)',
    zIndex: -1,
    transform: `translateX(calc(${filterIndex} * 170px))`,
  },
  '@media': {
    'screen and (max-width: 768px)': {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      width: '100%',
      overflowX: 'scroll',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      ':after': {
        width: '120px',
        height: '100%',
        transform: `translateX(calc(${filterIndex} * 130px))`,
      },
    },
  },
})

globalStyle(`${filterRow}::-webkit-scrollbar`, {
  display: 'none',
})

export const filterItem = style({
  fontSize: '1.0rem',
  cursor: 'pointer',
  listStyle: 'none',
  width: '160px',
  textAlign: 'center',
  padding: '5px 0',
  border: '1px solid #333',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  transition: '.3s',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '.8rem',
      minWidth: '120px',
    },
  },
})

export const filterItemSelected = style({
  color: 'white',
  fontWeight: 400,
})

export const cardList = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'start',
  gap: '32px',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: '20px',
    },
  },
})

export const emptyMessage = style({
  textAlign: 'center',
  color: '#999',
  fontSize: '1rem',
  marginTop: '60px',
})
