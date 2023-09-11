import Heading from '../../typography/Heading'
import { TPlanet } from '../../../types/units'
import ListItem from '../../List/ListItem'
import { useSearchParams } from 'react-router-dom'
import Stats from '../../Info/Stats'

const Planet = ({ planetData }: { planetData: TPlanet }) => {
  const {
    id,
    name,
    climate,
    rotation_period,
    orbital_period,
    diameter,
    gravity,
    population,
    surface_water,
    terrain,
  } = planetData

  const [, setSearchParams] = useSearchParams()

  const showFullPlanetData = () => {
    setSearchParams(`planet=${id}`)
  }

  return (
    <ListItem onClick={showFullPlanetData}>
      <Heading semantic='h2' text={name} />
      <Stats
        type='planet'
        planet={{
          name,
          id,
          climate,
          rotation_period,
          orbital_period,
          diameter,
          gravity,
          population,
          surface_water,
          terrain,
        }}
      />
    </ListItem>
  )
}

export default Planet
