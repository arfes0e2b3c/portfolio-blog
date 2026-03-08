import { style } from '@vanilla-extract/css'

export const container = style({
  width: '800px',
  margin: '0 auto',
  padding: '40px 0 80px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '20px 16px 60px',
    },
  },
})

export const backLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.85rem',
  color: '#888',
  textDecoration: 'none',
  marginBottom: '32px',
  ':hover': { color: '#333' },
})

export const articleTitle = style({
  fontSize: '0.85rem',
  color: '#888',
  fontWeight: 300,
  marginBottom: '8px',
})

export const questionHeading = style({
  fontSize: '1.4rem',
  fontWeight: 400,
  lineHeight: 1.6,
  color: '#222',
  marginBottom: '24px',
})

export const sectionTitle = style({
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#aaa',
  marginBottom: '8px',
  marginTop: '32px',
  fontWeight: 400,
})

export const modelAnswerBox = style({
  backgroundColor: '#f8f9fa',
  borderLeft: '3px solid #89abe5',
  padding: '16px 20px',
  borderRadius: '0 6px 6px 0',
  fontSize: '0.95rem',
  lineHeight: 1.7,
  color: '#444',
  marginBottom: '8px',
})

export const keyPointBox = style({
  fontSize: '0.85rem',
  color: '#666',
  fontStyle: 'italic',
  marginBottom: '24px',
})

export const divider = style({
  border: 'none',
  borderTop: '1px solid #eee',
  margin: '32px 0',
})

export const answerCard = style({
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  borderRadius: '8px',
  padding: '20px 24px',
  marginBottom: '16px',
})

export const answerHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '12px',
})

export const answerDate = style({
  fontSize: '0.8rem',
  color: '#999',
  fontWeight: 100,
})

export const qualityBadge = style({
  padding: '2px 10px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 500,
})

export const qualityCorrect = style({ backgroundColor: '#d4edda', color: '#2d6a4f' })
export const qualityWrong = style({ backgroundColor: '#f8d7da', color: '#721c24' })
export const qualityNeutral = style({ backgroundColor: '#e2e8f0', color: '#555' })

export const answerText = style({
  fontSize: '0.95rem',
  lineHeight: 1.7,
  color: '#333',
  whiteSpace: 'pre-wrap',
  marginBottom: '12px',
})

export const feedbackText = style({
  fontSize: '0.9rem',
  lineHeight: 1.7,
  color: '#555',
  borderTop: '1px solid #f0f0f0',
  paddingTop: '12px',
})

export const metaRow = style({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  marginBottom: '32px',
})

export const metaBadge = style({
  padding: '4px 12px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  fontSize: '0.8rem',
  fontWeight: 500,
})

export const externalLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.85rem',
  color: '#89abe5',
  textDecoration: 'none',
  ':hover': { textDecoration: 'underline' },
})
