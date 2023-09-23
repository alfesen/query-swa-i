import { Fragment } from 'react'
import { TStats } from '../../types/typography'
import Heading from '../typography/Heading'
import Apparition from './Apparition'
import StatItem from './StatItem'

const Stats = (props: TStats) => {
  const spaces = true

  const { type } = props
  if (type === 'person') {
    const { height, mass, birth_year } = props.person
    return (
      <StatItem
        stats={[
          { name: 'H', value: `${height}cm`, spaces },
          { name: 'M', value: `${mass}kg`, spaces },
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
            { name: 'RP', value: `${rotation_period} hours`, spaces },
            { name: 'OP', value: `${orbital_period} days` },
          ]}
        />
        <StatItem stats={{ name: 'Dia', value: `${diameter}km` }} />
        <StatItem
          stats={[
            { name: 'Climate', value: climate, spaces },
            { name: 'SWL', value: surface_water, spaces },
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
            { name: 'Height', value: rendered.height, spaces },
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
  if (type === 'vehicle' || type === 'starship') {
    const {
      manufacturer,
      model,
      consumables,
      cargo_capacity,
      cost_in_credits,
      crew,
      length,
      max_atmosphering_speed,
      passengers,
    } = type === 'vehicle' ? props.vehicle : props.starship

    return (
      <Fragment>
        <Heading semantic='h4' text={`Built by ${manufacturer}`} />
        <StatItem stats={{ name: 'Price (ᖬ)', value: cost_in_credits }} />
        <StatItem
          stats={[
            { name: 'Model', value: model, spaces },
            { name: 'maxSp', value: max_atmosphering_speed },
          ]}
        />
        <StatItem
          stats={[
            { name: 'Len', value: length, spaces },
            { name: 'Cons', value: consumables, spaces },
            { name: 'Cgo', value: cargo_capacity },
          ]}
        />
        <StatItem
          stats={[
            { name: 'Crew', value: crew, spaces },
            { name: 'Pax', value: passengers },
          ]}
        />
      </Fragment>
    )
  }
}

export default Stats
