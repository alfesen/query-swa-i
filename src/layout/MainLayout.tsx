import { Fragment } from 'react'
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useModal } from '../hooks/useModal'
import Modal from '../components/UI/Modal'
import FullPersonData from '../components/Units/People/FullPersonData'
import FullPlanetData from '../components/Units/Planets/FullPlanetData'
import FullSpeciesData from '../components/Units/Species/FullSpeciesData'
import FullStarshipData from '../components/Units/Starships/FullStarshipData'
import FullVehicleData from '../components/Units/Vehicles/FullVehicleData'
import FullFilmData from '../components/Units/Films/FullFilmData'

const MainLayout = () => {
  const { closeModal } = useModal()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const hideModal = () => {
    closeModal()
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
      <Outlet />
    </Fragment>
  )
}

export default MainLayout
