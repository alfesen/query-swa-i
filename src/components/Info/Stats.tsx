import { Fragment } from 'react'
import { TStats } from '../../types/typography'
import Paragraph from '../typography/Paragraph'
import Heading from '../typography/Heading'

const Stats = (props: TStats) => {
  const { type } = props
  if (type === 'person') {
    const { height, mass, birth_year } = props.person
    return (
      <Paragraph>{`H: ${height}cm | M: ${mass}kg | BY: ${birth_year}`}</Paragraph>
    )
  }
  if (type === 'planet') {
    const {
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
    } = props.planet
    return (
      <Fragment>
        <Heading semantic='h4' text={`Terrain: ${terrain}`} />
        <Paragraph>
          Time: RP: {rotation_period} hours | OP: {orbital_period} days
        </Paragraph>
        <Paragraph>Dimensions: Dia: {diameter}km</Paragraph>
        <Paragraph>
          Climate: {climate} | SWL: {surface_water}% | G: {gravity}G
        </Paragraph>
        <Paragraph>Population: {population}</Paragraph>
      </Fragment>
    )
  }
}

export default Stats
