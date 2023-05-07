import { style } from '@vanilla-extract/css'

export const adminCreate = style({
  width: '100%',
})

export const createBody = style({
  width: '1280px',
  display: 'flex',
  margin: '0 auto',
})

export const createResult = style({
  width: '50%',
  height: '70vh',
  overflow: 'scroll',
  padding: '30px',
  boxShadow: '0 0 5px 5px rgba(0,0,0,0.1)',
  border: 'none',
  borderRadius: '10px',
})
export const createTextarea = style({
  width: '50%',
  height: '70vh',
  padding: '30px',
  marginLeft: '20px',
  boxShadow: '0 0 5px 5px rgba(0,0,0,0.1)',
  border: 'none',
  borderRadius: '10px',
})
