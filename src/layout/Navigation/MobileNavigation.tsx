import { useState } from 'react'
import { css } from '@emotion/react'
import {
  NavContainer,
  NavLinkContainer,
} from './NavigationComponents/SharedNavigationComponents'
import NavLogo from './NavigationComponents/NavLogo'
import { RocketButton } from './NavigationComponents/RocketButton'
import NavLinks from './NavigationComponents/NavLinks'

const MobileNavigation = () => {
  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () => {
    setShowNav(showNav => !showNav)
  }

  return (
    <NavContainer>
      <NavLogo />
      <RocketButton onClick={showNavHandler} active={showNav} />
      <NavLinkContainer
        css={css({
          transition: 'translate .4s',
          translate: !showNav ? '100% 0' : '0 0',
        })}>
        <NavLinks setShowNav={setShowNav} />
      </NavLinkContainer>
    </NavContainer>
  )
}

export default MobileNavigation
