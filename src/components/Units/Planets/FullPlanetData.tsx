import styled from '@emotion/styled'
import { TPlanet } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import { css } from '@emotion/react'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'

const planetDataStyles = css({
  position: 'relative',
  padding: '2rem',
  minHeight: '10rem',
})

const FullPlanetData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()
  const { getItem } = useFetch('planets', `planet ${id}`, id) 
  const {
    data: planet,
    error,
    isLoading,
    isFetched,
  } = getItem as QueryObserverSuccessResult<TPlanet>

  const PlanetData = styled.article(planetDataStyles)

  const {
    climate,
    diameter,
    gravity,
    name,
    orbital_period,
    population,
    rotation_period,
    surface_water,
    residents,
    terrain,
    films,
  } = planet || {}

  return (
    <PlanetData>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !error && isFetched && (
        <Fragment>
          <Heading semantic='h3' text={name} />
          <Stats
            type='planet'
            planet={{
              climate,
              diameter,
              gravity,
              id,
              name,
              orbital_period,
              population,
              rotation_period,
              surface_water,
              terrain,
            }}
          />

          <LinkGroup
            type='residents'
            residents={separateId(residents) as string[]}
          />
          {<LinkGroup type='films' films={separateId(films) as string[]} />}
        </Fragment>
      )}
    </PlanetData>
  )
}

export default FullPlanetData
