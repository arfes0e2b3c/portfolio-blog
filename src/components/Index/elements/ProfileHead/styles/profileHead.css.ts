import { style } from '@vanilla-extract/css'

export const profileHead = style({
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': {
      height: 'auto',
    },
  },
})

export const profileHeadInner = style({
  width: '640px',
  marginLeft: 'calc(50vw - 640px)',
  height: 'calc(100vh - 300px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      marginLeft: '0',
      height: 'auto',
    },
  },
})

export const profileHeadTitle = style({
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

export const profileHeadBody = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
})

export const fullname = style({
  margin: '0',
  fontSize: '2.5em',
  fontWeight: '100',
})

export const currentJob = style({
  margin: '0',
  fontSize: '1.2em',
})

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
})

export const snsIcon = style({
  marginRight: '10px',
})
