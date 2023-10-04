import { TNavLinks } from '@/types/ui'
import { NavLink } from './SharedNavigationComponents'

const NavLinks = ({ setShowNav }: TNavLinks) => {
  const routes = [
    'People',
    'Species',
    'Planets',
    'Vehicles',
    'Starships',
    'Films',
  ]
  return routes.map(route => {
    return (
      <NavLink
        onClick={setShowNav ? () => setShowNav(false) : undefined}
        key={crypto.randomUUID()}
        className={({ isActive }) => (isActive ? 'active' : '')}
        to={`${route.toLowerCase()}`}>
        {route}
      </NavLink>
    )
  })
}

export default NavLinks
