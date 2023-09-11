import Heading from '../../typography/Heading'
import { TPlanet } from '../../../types/units'
import ListItem from '../../List/ListItem'
import { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'

const Planet = ({ planetData }: { planetData: TPlanet }) => {
  const { id, name } = planetData

  const [, setSearchParams] = useSearchParams()

  const showFullPlanetData = () => {
    setSearchParams(`planet=${id}`)
  }

  return (
    <Fragment>
      <ListItem onClick={showFullPlanetData}>
        <Heading semantic='h2' text={name} />
      </ListItem>
    </Fragment>
  )
}

export default Planet
