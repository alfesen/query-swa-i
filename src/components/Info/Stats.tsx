import { Fragment } from 'react'
import { TStats } from '../../types/typography'
import Heading from '../typography/Heading'
import Apparition from './Apparition'
import StatItem from './StatItem'

const Stats = (props: TStats) => {
  const { type } = props
  if (type === 'person') {
    const { height, mass, birth_year } = props.person
    return (
      <StatItem
        stats={[
          { name: 'H', value: `${height}cm`, spaces: true },
          { name: 'M', value: `${mass}kg`, spaces: true },
          { name: 'BY', value: `${birth_year}` },
        ]}
      />
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
        <StatItem
          stats={[
            { name: 'RP', value: `${rotation_period} hours`, spaces: true },
            { name: 'OP', value: `${orbital_period} days` },
          ]}
        />
        <StatItem stats={{ name: 'Dia', value: `${diameter}km` }} />
        <StatItem
          stats={[
            { name: 'Climate', value: climate, spaces: true },
            { name: 'SWL', value: surface_water, spaces: true },
            { name: 'G', value: `${gravity}` },
          ]}
        />
        <StatItem stats={{ name: 'Population', value: population }} block />
      </Fragment>
    )
  }
  if (type === 'species') {
    const {
      designation,
      average_height: height,
      skin_colors,
      hair_colors,
      eye_colors,
      average_lifespan: lifespan,
      language,
    } = props.species

    const rendered = {
      lifespan:
        lifespan === 'indefinite' || lifespan === 'unknown'
          ? lifespan
          : `${lifespan}yrs`,
      height: height === 'n/a' ? height : `${height}cm`,
    }

    return (
      <Fragment>
        <Heading semantic='h4' text={`Designation: ${designation}`} />
        <StatItem
          stats={[
            { name: 'Height', value: rendered.height, spaces: true },
            { name: 'Lifespan', value: rendered.lifespan },
          ]}
        />
        <StatItem stats={{ name: 'Language', value: language }} block />
        <Apparition
          eye_color={eye_colors}
          skin_color={skin_colors}
          hair_color={hair_colors}
        />
      </Fragment>
    )
  }
}

export default Stats
