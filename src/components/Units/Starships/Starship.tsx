import { TStarship } from '@Types/units'
import Stats from '@Components/Info/Stats'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'
import { useModal } from '@/hooks/useModal'

const Starship = ({ data }: { data: TStarship }) => {
  const { name, id } = data || {}
  const { showFullData } = useModal()

  return (
    <ListItem onClick={() => showFullData('starship', id)}>
      <Heading semantic='h2' text={`${name}`} />
      <Stats type='starship' starship={data} />
    </ListItem>
  )
}

export default Starship
