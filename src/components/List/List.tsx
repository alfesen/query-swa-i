import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { slideUp } from '@/css/keyframes'

const listStyles = css({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'left',
  gap: '3em',
  padding: '1em 3em',
  animation: `${slideUp} .5s ease`,
})

const List = styled.ul(listStyles)

export default List
