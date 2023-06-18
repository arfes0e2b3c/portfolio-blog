import { style } from '@vanilla-extract/css'

export const noAuthWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100vh - 350px)',
})

export const noAuth = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '600px',
  height: '300px',
  boxShadow: '0 0 5px 5px rgba(0,0,0,0.1)',
})

export const button = style({
  width: '200px',
  marginTop: '20px',
  padding: '10px',
  border: 'none',
  background: 'none',
  boxShadow: '0 0 4px 2px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  color: '#333',
  cursor: 'pointer',
  fontSize: '1.1rem',
})
