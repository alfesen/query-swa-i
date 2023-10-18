import { TNavLinks } from '@/types/ui'
import { NavLink } from './SharedNavigationComponents'
import { Fragment } from 'react'

const NavLinks = ({ setShowNav }: TNavLinks) => {
  const routes = [
    'People',
    'Species',
    'Planets',
    'Vehicles',
    'Starships',
    'Films',
  ]

  return (
    <Fragment>
      {routes.map(route => {
        return (
          <NavLink
            onClick={setShowNav ? () => setShowNav(false) : undefined}
            key={crypto.randomUUID()}
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={`${route.toLowerCase()}`}>
            {route}
          </NavLink>
        )
      })}
      <NavLink
        onClick={setShowNav ? () => setShowNav(false) : undefined}
        key={crypto.randomUUID()}
        className={`${({ isActive }: { isActive: boolean }) =>
          isActive ? 'active' : ''} btn`}
        to={'search'}>
        Search
      </NavLink>
    </Fragment>
  )
}

export default NavLinks
