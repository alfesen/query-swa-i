import { TPlanet } from '@Types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import Heading from '@Components/typography/Heading'
import Stats from '@Components/Info/Stats'
import { useFetch } from '@Hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '@Components/Links/LinkGroup'
import useUnitId from '@Hooks/useUnitId'
import FullData from '@Components/UI/FullData'
import { AxiosError } from 'axios'
import ItemNotFound from '@Components/UI/ItemNotFound'

const FullPlanetData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()
  const getItem = useFetch('planets', `planet ${id}`, id)
  const {
    data: planet,
    error,
    isLoading,
    isFetched,
    isError,
  } = getItem as QueryObserverSuccessResult<TPlanet>

  if (isError) {
    return <ItemNotFound error={error as unknown as AxiosError} />
  }

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
    <FullData>
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
            items={separateId(residents) as string[]}
          />
          {<LinkGroup type='films' items={separateId(films) as string[]} />}
        </Fragment>
      )}
    </FullData>
  )
}

export default FullPlanetData
