import { useSearchParams } from 'react-router-dom'
import { TStarship } from '@Types/units'
import Stats from '@Components/Info/Stats'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'

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
