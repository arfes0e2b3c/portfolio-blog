import { style } from '@vanilla-extract/css'

export const articleInfoContainer = style({
  padding: '10px 30px',
  marginTop: '10px',
  boxSizing: 'border-box',
  boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(205,205,205,0.2)',
  borderRadius: '10px',
})

export const articleInfoList = style({
  width: '100%',
  padding: '0',
  margin: '0',
})

export const articleInfoItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  selectors: {
    '&:last-child': {
      border: 'none',
    },
  },
})

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
})

export const itemLabel = style({
  marginLeft: '8px',
})
