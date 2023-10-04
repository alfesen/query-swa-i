import {
  NavContainer,
  NavLinkContainer,
} from './NavigationComponents/SharedNavigationComponents'
import NavLinks from './NavigationComponents/NavLinks'
import NavLogo from './NavigationComponents/NavLogo'

const DesktopNavigation = () => {
  return (
    <NavContainer>
      <NavLogo />
      <NavLinkContainer>
        <NavLinks />
      </NavLinkContainer>
    </NavContainer>
  )
}

export default DesktopNavigation
