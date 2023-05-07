import { globalStyle, style } from '@vanilla-extract/css'

export const adminList = style({
  width: '1280px',
  margin: '50px auto',
})

export const adminListHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})

export const adminListTitle = style({
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
    width: '100px',
    borderBottom: '2px solid #777',
  },
})

export const createArticleButton = style({
  padding: '10px 20px',
  textDecoration: 'none',
  backgroundColor: '#333',
  color: '#fff',
  border: '1px solid rgba(0,0,0,0.4)',
  borderRadius: '5px',
  transition: '.3s',
  ':hover': {
    backgroundColor: '#fff',
    color: '#333',
  },
})

export const articleListTable = style({
  marginTop: '50px',
})

export const articleListTableHead = style({
  display: 'flex',
  justifyContent: 'space-around',
  width: '90%',
  margin: '0 auto',
  textAlign: 'left',
})

export const articleId = style({
  width: '5%',
  margin: '0',
  textAlign: 'center',
})
export const articleTitle = style({
  width: '45%',
  margin: '0 0 0 2%',
})
export const articlePublishedAt = style({
  width: '10%',
  margin: '0',
  textAlign: 'center',
})
export const articleUpdatedAt = style({
  width: '10%',
  margin: '0',
  textAlign: 'center',
})
export const articleOther = style({
  width: '8%',
  margin: '0',
})

export const articleListTableBody = style({
  width: '100%',
  padding: '0',
  margin: '10px auto',
  textAlign: 'left',
})
