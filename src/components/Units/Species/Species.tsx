import { useSearchParams } from 'react-router-dom'
import { TSpecies } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'
import Stats from '@Components/Info/Stats'

const Species = ({ data }: { data: TSpecies }) => {
  const { id, name, classification } = data || {}

  const [, setSearchParams] = useSearchParams()

  const showFullSpeciesData = () => {
    setSearchParams(`species=${id}`)
  }

  return (
    <ListItem onClick={showFullSpeciesData}>
      <Heading semantic='h2' text={`${name} - ${classification}`} />
      <Stats type='species' species={{ ...data }} />
    </ListItem>
  )
}

export default Species
