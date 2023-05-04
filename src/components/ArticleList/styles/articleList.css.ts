import { style } from '@vanilla-extract/css'

export const articleListInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '1280px',
  margin: '0 auto',
})

export const articleListContainer = style({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

export const articleListTitle = style({
  position: 'relative',
  marginLeft: '20px',
  fontSize: '60px',
  textAlign: 'center',
  ':after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    borderBottom: '2px solid #333',
  },
})
