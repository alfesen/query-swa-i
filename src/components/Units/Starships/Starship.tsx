import { useSearchParams } from 'react-router-dom'
import { TStarship } from '../../../types/units'
import Stats from '../../Info/Stats'
import ListItem from '../../List/ListItem'
import Heading from '../../typography/Heading'

const Starship = ({ starshipData }: { starshipData: TStarship }) => {
  const [, setSearchParams] = useSearchParams()

  const { name, id } = starshipData || {}

  const showFullVehicleData = () => {
    setSearchParams(`starship=${id}`)
  }

  return (
    <ListItem onClick={showFullVehicleData}>
      <Heading semantic='h2' text={`${name}`} />
      <Stats type='starship' starship={starshipData} />
    </ListItem>
  )
}

export default Starship
