import { style } from '@vanilla-extract/css'

export const adminCreate = style({
  width: '100%',
})

export const adminCreateInner = style({
  width: '1280px',
  margin: '50px auto 0',
})

export const adminCreateHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})

export const adminCreateTitle = style({
  position: 'relative',
  display: 'inline',
  marginLeft: '20px',
  paddingBottom: '5px',
  fontSize: '36px',
  fontWeight: 'lighter',
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
