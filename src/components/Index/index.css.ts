import { style } from '@vanilla-extract/css'

const historyNum = 11
const recentReadHeight = 300
const talkAndEventNum = 6

export const profileContainer = style({
  height: `${1450 + (historyNum - 11) * 100}px`,
})

export const profileHead = style({
  position: 'sticky',
  height: 'fit-content',
  top: 'calc((100vh - 100px) / 2 + 100px)',
  left: '0',
  transform: 'translateY(-50%)',
  zIndex: 1,
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'relative',
      top: '0',
      left: '0',
      width: '100%',
    },
  },
})

export const profileBody = style({
  position: 'absolute',
  top: '100px',
  left: '0',
  width: '100%',
})

export const recentPostContainer = style({})

export const talkAndEventContainer = style({
  position: 'absolute',
  top: `${2150 + (historyNum - 11) * 100 + recentReadHeight}px`,
  height: '637px',
  width: '100%',
})

export const talkAndEventHead = style({
  position: 'sticky',
  height: 'fit-content',
  top: 'calc((100vh - 100px) / 2 + 100px)',
  left: '0',
  transform: 'translateY(-50%)',
  zIndex: 1,
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'relative',
      top: '0',
      left: '0',
      width: '100%',
    },
  },
})

export const talkAndEventBody = style({
  position: 'absolute',
  top: '0px',
  left: '0',
  width: '100%',
})

export const productContainer = style({
  position: 'absolute',
  top: `${3000 + (historyNum - 11) * 100 + recentReadHeight + (talkAndEventNum - 4) * 120}px`,
  height: '1566px',
  width: '100%',
})

export const productHead = style({
  position: 'sticky',
  height: 'fit-content',
  top: 'calc((100vh - 100px) / 2 + 100px)',
  left: '0',
  transform: 'translateY(-50%)',
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'relative',
      top: '0',
      left: '0',
      width: '100%',
    },
  },
})

export const productBody = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
})
