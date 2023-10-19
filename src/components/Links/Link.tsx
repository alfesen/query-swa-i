import { Link as RouterLink } from 'react-router-dom'
import { css } from '@emotion/react'
import { TLink } from '@/types/typography'

const linkStyle = css({
  fontSize: '1.6rem',
  margin: '.25rem 0',
  color: 'purple',
  textDecorationColor: 'transparent',
  transition: 'color .3s, text-decoration-color .3s',
  '&:hover, &:active': {
    color: 'darkred',
    textDecorationColor: 'darkred',
  },
})

const Link = ({ to, text }: TLink) => {
  return (
    <RouterLink css={linkStyle} to={to}>
      {text}
    </RouterLink>
  )
}

export default Link
