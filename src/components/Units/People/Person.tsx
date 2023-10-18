import Heading from '@Components/typography/Heading'
import { IPerson } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Stats from '@Components/Info/Stats'
import Apparition from '@Components/Info/Apparition'
import { Fragment } from 'react'
import { useModal } from '@/hooks/useModal'

const Person = ({ data }: { data: IPerson }) => {
  const { id, name, height, mass, birth_year, gender, eye_color, hair_color } =
    data
  const { showFullData } = useModal()

  return (
    <Fragment>
      <ListItem onClick={() => showFullData('person', id)}>
        <Heading semantic='h2' text={name} />
        <Stats type='person' person={{ height, mass, birth_year }} />
        <Apparition {...{ gender, eye_color, hair_color }} />
      </ListItem>
    </Fragment>
  )
}

export default Person
