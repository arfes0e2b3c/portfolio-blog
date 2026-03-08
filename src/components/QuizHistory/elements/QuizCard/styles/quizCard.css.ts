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

export const quizDate = style({
  fontSize: '0.8rem',
  color: '#999',
  fontWeight: 100,
  letterSpacing: '0.04em',
})

export const levelBadge = style({
  fontSize: '0.75rem',
  color: '#999',
})

export const titleText = style({
  fontSize: '0.85rem',
  color: '#888',
  marginBottom: '8px',
  fontWeight: 300,
})

export const questionText = style({
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: '6px',
  fontSize: '1.0rem',
  fontWeight: '400',
  color: '#333',
  lineHeight: 1.6,
  selectors: {
    [`${card}:hover &`]: {
      color: '#89abe5',
    },
  },
})

export const arrow = style({
  flexShrink: 0,
  marginTop: '2px',
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

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '14px',
  flexWrap: 'wrap',
})

export const scoreBadge = style({
  padding: '3px 10px',
  fontSize: '0.75rem',
  borderRadius: '4px',
  fontWeight: 500,
})

export const scoreCorrect = style({
  backgroundColor: '#d4edda',
  color: '#2d6a4f',
})

export const scoreWrong = style({
  backgroundColor: '#f8d7da',
  color: '#721c24',
})

export const scoreNeutral = style({
  backgroundColor: '#e2e8f0',
  color: '#555',
})

export const rankBadge = style({
  padding: '3px 10px',
  fontSize: '0.75rem',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  fontWeight: 500,
})

export const repsText = style({
  fontSize: '0.75rem',
  color: '#aaa',
})
