import { TSpecies } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'
import Stats from '@Components/Info/Stats'
import { useModal } from '@/hooks/useModal'

const Species = ({ data }: { data: TSpecies }) => {
  const { id, name, classification } = data || {}
  const { showFullData } = useModal()

  return (
    <ListItem onClick={() => showFullData('species', id)}>
      <Heading semantic='h2' text={`${name} - ${classification}`} />
      <Stats type='species' species={{ ...data }} />
    </ListItem>
  )
}

export default Species
