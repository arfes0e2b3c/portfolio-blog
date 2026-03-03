import { style } from '@vanilla-extract/css'

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

export const readHistorySubtitle = style({
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#999',
  marginTop: '0px',
  marginBottom: '40px',
  fontWeight: 400,
  letterSpacing: '0.05em',
})

export const statsRow = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0px',
  marginBottom: '40px',
  '@media': {
    'screen and (max-width: 768px)': {
      marginBottom: '28px',
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
