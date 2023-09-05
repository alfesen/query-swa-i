import Heading from '../../typography/Heading'
import { IPerson } from '../../../types/units'
import ListItem from '../../List/ListItem'
import Stats from '../../Info/Stats'
import Apparition from '../../Info/Apparition'
import { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'

const Person = ({ personData }: { personData: IPerson }) => {
  const { id, name, height, mass, birth_year, gender, eye_color, hair_color } =
    personData

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
