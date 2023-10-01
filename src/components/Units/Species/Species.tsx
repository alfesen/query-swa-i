import { useSearchParams } from 'react-router-dom'
import { TSpecies } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Heading from '@Components/typography/Heading'
import Stats from '@Components/Info/Stats'

const Species = ({ speciesData }: { speciesData: TSpecies }) => {
  const { id, name, classification } = speciesData || {}

  const [, setSearchParams] = useSearchParams()

  const showFullSpeciesData = () => {
    setSearchParams(`species=${id}`)
  }

  return (
    <ListItem onClick={showFullSpeciesData}>
      <Heading semantic='h2' text={`${name} - ${classification}`} />
      <Stats type='species' species={{ ...speciesData }} />
    </ListItem>
  )
}

export default Species
