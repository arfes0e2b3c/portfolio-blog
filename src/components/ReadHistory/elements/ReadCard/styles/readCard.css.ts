import { style } from '@vanilla-extract/css'

export const card = style({
  display: 'block',
  width: 'calc(50% - 16px)',
  padding: '24px 28px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.05)',
  transition: 'box-shadow 0.2s',
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  boxSizing: 'border-box',
  ':hover': {
    boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.08)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '16px 18px',
    },
  },
})

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px',
})

export const readDate = style({
  fontSize: '0.8rem',
  color: '#999',
  fontWeight: 100,
  letterSpacing: '0.04em',
})

export const feedbackBadge = style({
  fontSize: '0.75rem',
  color: '#999',
})

export const titleLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '1.1rem',
  fontWeight: '400',
  color: '#333',
  transition: 'color 0.15s',
  lineHeight: 1.5,
  selectors: {
    [`${card}:hover &`]: {
      color: '#89abe5',
    },
  },
})

export const arrow = style({
  fontSize: '0.85rem',
  opacity: 0.4,
  transition: 'opacity 0.15s, transform 0.15s',
  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
      transform: 'translateX(3px)',
    },
  },
})

export const topicList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginTop: '12px',
})

export const categoryTag = style({
  padding: '3px 10px',
  fontSize: '0.75rem',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  fontWeight: 500,
})

export const topicTag = style({
  padding: '3px 10px',
  fontSize: '0.75rem',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  fontWeight: 500,
})

export const noteContainer = style({
  marginTop: '14px',
})

export const noteText = style({
  margin: 0,
  fontSize: '0.9rem',
  color: '#555',
  lineHeight: 1.7,
})
