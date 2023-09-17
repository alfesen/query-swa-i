import { TVehicle } from '../../../types/units'
import ListItem from '../../List/ListItem'

const Vehicle = ({ vehicleData }: { vehicleData: TVehicle }) => {
  const { name } = vehicleData || {}
  return <ListItem>{name}</ListItem>
}

export default Vehicle
