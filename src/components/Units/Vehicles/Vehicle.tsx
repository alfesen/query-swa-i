import { useSearchParams } from 'react-router-dom'
import { TVehicle } from '@Types/units'
import Stats from '@Components/Info/Stats'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'

const Vehicle = ({ data }: { data: TVehicle }) => {
  const [, setSearchParams] = useSearchParams()

  const { name, vehicle_class, id } = data || {}

  const showFullVehicleData = () => {
    setSearchParams(`vehicle=${id}`)
  }

  return (
    <ListItem onClick={showFullVehicleData}>
      <Heading semantic='h2' text={`${name} - ${vehicle_class}`} />
      <Stats type='vehicle' vehicle={data} />
    </ListItem>
  )
}

export default Vehicle
