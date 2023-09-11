import { Fragment, memo } from 'react'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { useFetch } from '../../../hooks/useFetch'
import { TPlanet } from '../../../types/units'
import Heading from '../../typography/Heading'
import Planet from './Planet'
import List from '../../List/List'

const PlanetList = memo(() => {
  const { data, error, isLoading } = useFetch(
    'planets',
    'planets'
  ) as QueryObserverSuccessResult<{
    results: TPlanet[]
  }>

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { results: planets } = data || {}

  const renderPeople = () =>
    planets.map((planet, index) => (
      <Planet planetData={{ ...planet, id: index + 1 }} />
    ))

  return (
    <Fragment>
      {isLoading && <LoadingSpinner color='#fff' />}
      {!isLoading && !error && <List>{renderPeople()}</List>}
    </Fragment>
  )
})

export default PlanetList
