import { css } from '@emotion/react'
import styled from '@emotion/styled'

const listItemStyles = css({
  width: 'calc(100% / 4 - 3em)',
  padding: '3em',
  backgroundColor: '#eee',
  cursor: 'pointer',
  border: '1px solid rgba(221, 221, 221, 0.133)',
  boxShadow: '3px 5px 10px rgba(0, 0, 0, .1)',
  backfaceVisibility: 'hidden',
  transition: 'scale 0.2s',

  '&:hover': {
    scale: '1.025',
  },

  '@media screen and (max-width: 1400px)': {
    padding: '3em',
    width: 'calc(100% / 3 - 2em)',
  },

  '@media screen and (max-width: 1200px)': {
    padding: '2em',
    width: 'calc(100% / 3 - 2em)',
  },

  '@media screen and (max-width: 992px)': {
    padding: '2em',
    width: 'calc(100% / 2 - 2em)',
  },

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const ListItem = styled.li(listItemStyles)

export default ListItem
