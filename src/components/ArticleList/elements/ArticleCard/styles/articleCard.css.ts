import { style } from '@vanilla-extract/css'

const cardWidth = '700'
const cardHeight = '450'

export const articleCard = style({
  width: cardWidth + 'px',
  height: cardHeight + 'px',
  margin: '20px',
  boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.05)',
  transition: '.2s',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.1)',
  },
})

export const articleImageContainer = style({
  position: 'relative',
  width: '100%',
})

export const articleImage = style({
  width: '100%',
  height: 'calc(367.5% / ' + cardHeight + ')',
})

export const articleCreatedAt = style({
  position: 'absolute',
  top: '20px',
  left: '20px',
  padding: '5px 20px',
  margin: '0',
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '30px',
})

export const articleTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 'calc((1 - 367.5 / ' + cardHeight + ') * ' + cardHeight + 'px)',
})

export const articleTitle = style({
  width: '100%',
  margin: '0',
  marginLeft: '10px',
  fontWeight: 'lighter',
})
