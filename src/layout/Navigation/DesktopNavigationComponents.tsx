import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom'

const NavContainerStyles = css({
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',
  fontSize: '2rem',
})
const NavLinkContainerStyles = css({
  display: 'flex',
  gap: '2rem',
  marginRight: '1rem',
})
const NavLinkStyles = css({
  color: '#fff',
  textDecoration: 'none',
  '&.active': {
    textDecoration: 'underline',
  },
})
const LogoStyles = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
})

export const NavContainer = styled.nav(NavContainerStyles)
export const NavLinkContainer = styled.div(NavLinkContainerStyles)
export const NavLink = styled(Link)(NavLinkStyles)
export const Logo = styled.div(LogoStyles)
