import { createVar, style } from '@vanilla-extract/css'

export const categoryIndex = createVar()

export const articleListInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '1280px',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const categoryList = style({
  position: 'relative',
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '20px auto',
  padding: '0',
  gap: '10px',
  ':after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '160px',
    height: '36px',
    backgroundColor: '#333',
    borderRadius: '5px',
    transition: '.3s',
    zIndex: -1,
    transform: `translateX(calc(${categoryIndex} * 170px))`,
  },
})

export const categoryListItem = style({
  fontSize: '1.0rem',
  cursor: 'pointer',
  listStyle: 'none',
  width: '160px',
  textAlign: 'center',
  padding: '5px 0',
  border: '1px solid #333',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  transition: '.3s',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
})

export const selected = style({
  color: 'white',
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
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '40px',
      margin: '20px 0',
    },
  },
})
