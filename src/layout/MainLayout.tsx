import { Fragment } from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useModal } from '@Hooks/useModal'
import Modal from '@Components/UI/Modal'
import FullPersonData from '@Components/Units/People/FullPersonData'
import FullPlanetData from '@Components/Units/Planets/FullPlanetData'
import FullSpeciesData from '@Components/Units/Species/FullSpeciesData'
import FullStarshipData from '@Components/Units/Starships/FullStarshipData'
import FullVehicleData from '@Components/Units/Vehicles/FullVehicleData'
import FullFilmData from '@Components/Units/Films/FullFilmData'
import Navigation from './Navigation/Navigation'

const MainLayout = () => {
  const { closeModal } = useModal()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const hideModal = () => {
    closeModal()
    if (location.pathname.includes('search')) {
      const loc = location.search.split('&')
      loc.pop()
      return navigate(loc.join('&'))
    }
    navigate(location.pathname.split('?')[0])
  }

  const personId = Number(searchParams.get('person'))
  const planetId = Number(searchParams.get('planet'))
  const speciesId = Number(searchParams.get('species'))
  const vehicleId = Number(searchParams.get('vehicle'))
  const starshipId = Number(searchParams.get('starship'))
  const filmId = Number(searchParams.get('film'))

  return (
    <Fragment>
      {personId ? (
        <Modal onClose={hideModal}>
          <FullPersonData id={personId} />
        </Modal>
      ) : null}
      {planetId ? (
        <Modal onClose={hideModal}>
          <FullPlanetData id={planetId} />
        </Modal>
      ) : null}
      {speciesId ? (
        <Modal onClose={hideModal}>
          <FullSpeciesData id={speciesId} />
        </Modal>
      ) : null}
      {vehicleId ? (
        <Modal onClose={hideModal}>
          <FullVehicleData id={vehicleId} />
        </Modal>
      ) : null}
      {starshipId ? (
        <Modal onClose={hideModal}>
          <FullStarshipData id={starshipId} />
        </Modal>
      ) : null}
      {filmId ? (
        <Modal onClose={hideModal}>
          <FullFilmData id={filmId} />
        </Modal>
      ) : null}
      <Navigation />
      <Outlet />
    </Fragment>
  )
}

export default MainLayout
