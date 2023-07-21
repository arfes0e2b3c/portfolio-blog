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
