import { style } from '@vanilla-extract/css'

export const quizHistoryInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '1280px',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '0 16px 60px',
    },
  },
})

export const quizHistoryTitle = style({
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

export const endMessage = style({
  textAlign: 'center',
  color: '#bbb',
  fontSize: '1.1rem',
  fontWeight: 100,
  marginTop: '48px',
  letterSpacing: '0.1em',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '0.9rem',
      marginTop: '32px',
    },
  },
})
