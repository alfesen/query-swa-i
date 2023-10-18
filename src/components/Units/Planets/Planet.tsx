import Heading from '@Components/typography/Heading'
import { TPlanet } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Stats from '@Components/Info/Stats'
import { useModal } from '@/hooks/useModal'

const Planet = ({ data }: { data: TPlanet }) => {
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
  } = data

  const { showFullData } = useModal()

  return (
    <ListItem onClick={() => showFullData('planet', id)}>
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
