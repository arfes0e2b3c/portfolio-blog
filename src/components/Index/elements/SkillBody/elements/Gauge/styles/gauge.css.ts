import { createVar, globalStyle, style } from '@vanilla-extract/css'

export const strokePercent = createVar()

export const card = style({
  position: 'relative',
  width: '124px',
  height: '124px',
  borderRadius: '50%',
  cursor: 'pointer',
  color: '#333',
  transition: '.3s',
  overflow: 'hidden',
})

export const svg = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: '100',
})

globalStyle(`${svg} circle`, {
  width: '100%',
  height: '100%',
  fill: 'none',
  stroke: '#ddd',
  strokeWidth: '2',
  transformOrigin: 'center',
  transform: 'translate(2px, -2px) rotateZ(-90deg)',
})

globalStyle(`${svg} circle:nth-child(2)`, {
  strokeDasharray: '377',
  strokeDashoffset: `calc(377 * (100 - ${strokePercent}) / 100)`,
  stroke: '#333',
  transition: '.5s',
})

export const logoImage = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: '.3s',
})

globalStyle(`${card}:hover ${logoImage}`, {
  top: '30%',
  width: '30px',
})

export const skillLevel = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: '0',
  fontSize: '1em',
  fontWeight: '700',
  opacity: '0',
  transition: '.3s',
})

globalStyle(`${card}:hover ${skillLevel}`, {
  top: '60%',
  fontSize: '1.7em',
  opacity: '1',
})

globalStyle(`${card}:hover ${svg} circle:nth-child(2)`, {
  strokeDasharray: '377',
  strokeDashoffset: '754',
})
