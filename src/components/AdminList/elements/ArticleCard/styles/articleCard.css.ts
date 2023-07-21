import { globalStyle, style } from '@vanilla-extract/css'

export const articleCard = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  boxShadow: '0 0 2px 2px rgba(0,0,0,0.1)',
  borderRadius: '5px',
})

export const isDraft = style({
  backgroundColor: '#eee',
})

export const articleCardInner = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  userSelect: 'none',
})

export const articleId = style({
  width: '5%',
  textAlign: 'center',
})
export const articleTitle = style({
  width: '45%',
  marginLeft: '2%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})
export const articlePublishedAt = style({
  width: '10%',
  textAlign: 'center',
})
export const articleUpdatedAt = style({
  width: '10%',
  textAlign: 'center',
})
export const articleButtonContainer = style({
  width: '8%',
})

export const articleEditButton = style({
  textDecoration: 'none',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  background: 'none',
  boxShadow:
    '0px 0px 0px rgba(0,0,0,0.15), -0px -0px 0px rgba(230,230,230,0.4),inset 3px 3px 3px rgba(0,0,0,0.15), inset -3px -3px 3px rgba(230,230,230,0.4)',
  borderRadius: '3px',
  transition: '.3s',
  ':hover': {
    boxShadow:
      '3px 3px 3px rgba(0,0,0,0.15), -3px -3px 3px rgba(210,210,210,0.4),inset 0px 0px 0px rgba(0,0,0,0.15), inset -0px -0px 0px rgba(230,230,230,0.4)',

    fontSize: '1.1rem',
  },
})

export const isDisabled = style({
  pointerEvents: 'none',
  userSelect: 'none',
  opacity: '0.4',
  boxShadow: 'none',
})

export const articleDeleteButton = style({
  textDecoration: 'none',
  color: '#333',
  padding: '10px 20px',
  background: 'none',
  border: 'none',
  boxShadow: 'inset 3px 3px 3px rgba(0,0,0,0.15), inset -3px -3px 3px rgba(230,230,230,0.4)',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: '.3s',
  ':hover': {
    boxShadow:
      '0px 0px 0px rgba(0,0,0,0.15), -0px -0px 0px rgba(210,210,210,0.4),inset 0px 0px 0px rgba(0,0,0,0.15), inset -0px -0px 0px rgba(230,230,230,0.4)',
    backgroundColor: '#FF6E6F',
    color: 'white',
  },
})
