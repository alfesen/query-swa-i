import {
  NavContainer,
  Logo,
  NavLinkContainer,
  NavLink,
} from './DesktopNavigationComponents'

const DesktopNavigation = () => {
  const routes = [
    'People',
    'Species',
    'Planets',
    'Vehicles',
    'Starships',
    'Films',
  ]

  const renderNavLinks = () =>
    routes.map(route => {
      return (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={`${route.toLowerCase()}`}>
          {route}
        </NavLink>
      )
    })

  return (
    <NavContainer>
      <Logo>QuerySWAPI</Logo>
      <NavLinkContainer>{renderNavLinks()}</NavLinkContainer>
    </NavContainer>
  )
}

export default DesktopNavigation
