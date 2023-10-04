import { css } from '@emotion/react'
import styled from '@emotion/styled'

const LogoStyles = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
})

const Logo = styled.div(LogoStyles)
const NavLogo = () => <Logo>QuerySWAPI</Logo>
export default NavLogo
