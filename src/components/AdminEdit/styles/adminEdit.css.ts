import { style } from '@vanilla-extract/css'

export const adminEdit = style({
  width: '100%',
})

export const adminEditInner = style({
  width: '1280px',
  margin: '50px auto 0',
})

export const adminEditHeader = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
  gap: '30px'
})

export const linkToAdminPage = style({
  textDecoration: 'none',
  color: '#333',
  border: '1px solid #333',
  padding: '8px 15px',
  borderRadius: '5px',
  transition: '.3s',
  ':hover': {
    backgroundColor: '#333',
    color: 'white',
  },
})

export const adminEditTitle = style({
  position: 'relative',
  display: 'inline',
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
