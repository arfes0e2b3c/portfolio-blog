import { style } from '@vanilla-extract/css'

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
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '20px 0',
  padding: '0',
  gap: '10px',
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
  transition: '.3s',
  ':hover': {
    backgroundColor: '#333',
    color: 'white',
  },
})

export const selected = style({
  backgroundColor: '#333',
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
