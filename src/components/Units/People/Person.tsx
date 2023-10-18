import Heading from '@Components/typography/Heading'
import { IPerson } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Stats from '@Components/Info/Stats'
import Apparition from '@Components/Info/Apparition'
import { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'

const Person = ({ data }: { data: IPerson }) => {
  const { id, name, height, mass, birth_year, gender, eye_color, hair_color } =
    data

  const [, setSearchParams] = useSearchParams()

  const showFullPersonData = () => {
    setSearchParams(`person=${id}`)
  }

  return (
    <Fragment>
      <ListItem onClick={showFullPersonData}>
        <Heading semantic='h2' text={name} />
        <Stats type='person' person={{ height, mass, birth_year }} />
        <Apparition {...{ gender, eye_color, hair_color }} />
      </ListItem>
    </Fragment>
  )
}

export default Person
