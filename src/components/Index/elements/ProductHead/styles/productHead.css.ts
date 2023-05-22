import { style } from '@vanilla-extract/css'

export const productHead = style({
  width: '640px',
  height: 'calc(100vh - 100px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'calc(50vw - 640px)',
})

export const productHeadTitle = style({
  position: 'relative',
  fontSize: '3em',
  fontWeight: '100',
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150px',
    borderBottom: '2px solid #777',
  },
})