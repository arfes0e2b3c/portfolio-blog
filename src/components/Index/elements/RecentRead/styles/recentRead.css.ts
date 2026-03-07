import { style } from '@vanilla-extract/css'

export const recentRead = style({
  marginBottom: '100px',
  '@media': {
    'screen and (max-width: 768px)': {
      marginLeft: '10px',
    },
  },
})

export const sectionTitle = style({
  position: 'relative',
  textAlign: 'center',
  fontSize: '2.5em',
  fontWeight: 'lighter',
  userSelect: 'none',
  margin: '50px 0 20px',
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    borderBottom: '2px solid #333',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.0em',
      top: '20%',
    },
  },
})

export const readList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  maxWidth: '1100px',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      paddingRight: '10px',
    },
  },
})

export const readItem = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '20px',
  padding: '18px 0',
  borderBottom: '1px solid #eee',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'background-color 0.15s',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '12px',
      padding: '14px 0',
    },
  },
})

export const readDate = style({
  fontSize: '0.95rem',
  color: '#999',
  fontWeight: 400,
  letterSpacing: '0.04em',
  flexShrink: 0,
  whiteSpace: 'nowrap',
})

export const readTitle = style({
  fontSize: '1.1rem',
  fontWeight: 400,
  color: '#333',
  lineHeight: 1.6,
  flex: 1,
  minWidth: 0,
})

export const readCategory = style({
  fontSize: '0.8rem',
  padding: '3px 10px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  fontWeight: 500,
  flexShrink: 0,
  whiteSpace: 'nowrap',
})

export const linkContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  maxWidth: '1100px',
  margin: '14px auto 0',
  '@media': {
    'screen and (max-width: 768px)': {
      paddingRight: '10px',
    },
  },
})

export const readLink = style({
  textDecoration: 'none',
  color: '#333',
  border: '1px solid #333',
  padding: '5px 15px',
  borderRadius: '5px',
  transition: '.3s',
  ':hover': {
    backgroundColor: '#333',
    color: 'white',
  },
})
