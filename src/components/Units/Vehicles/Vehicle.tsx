import { TVehicle } from '@Types/units'
import Stats from '@Components/Info/Stats'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'
import { useModal } from '@/hooks/useModal'

const Vehicle = ({ data }: { data: TVehicle }) => {
  const { name, vehicle_class, id } = data || {}
  const { showFullData } = useModal()

  return (
    <ListItem onClick={() => showFullData('vehicle', id)}>
      <Heading semantic='h2' text={`${name} - ${vehicle_class}`} />
      <Stats type='vehicle' vehicle={data} />
    </ListItem>
  )
}

export default Vehicle
