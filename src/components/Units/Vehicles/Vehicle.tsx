import { useSearchParams } from 'react-router-dom'
import { TVehicle } from '../../../types/units'
import Stats from '../../Info/Stats'
import ListItem from '../../List/ListItem'
import Heading from '../../typography/Heading'

const Vehicle = ({ vehicleData }: { vehicleData: TVehicle }) => {
  const [, setSearchParams] = useSearchParams()

  const { name, vehicle_class, id } = vehicleData || {}

  const showFullVehicleData = () => {
    setSearchParams(`vehicle=${id}`)
  }

  return (
    <ListItem onClick={showFullVehicleData}>
      <Heading semantic='h2' text={`${name} - ${vehicle_class}`} />
      <Stats type='vehicle' vehicle={vehicleData} />
    </ListItem>
  )
}

export default Vehicle
