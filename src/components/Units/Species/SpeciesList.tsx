import { Fragment } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { QueryObserverSuccessResult } from 'react-query'
import Heading from '../../typography/Heading'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { TSpecies } from '../../../types/units'
import Species from './Species'
import List from '../../List/List'

const SpeciesList = () => {
  const { data, error, isLoading } = useFetch(
    'species',
    'species'
  ) as QueryObserverSuccessResult<{
    results: TSpecies[]
  }>

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { results: species } = data || {}

  const renderSpecies = () =>
    species.map((species, index) => (
      <Species
        key={crypto.randomUUID()}
        speciesData={{ ...species, id: index + 1 }}
      />
    ))

  return (
    <Fragment>
      {isLoading && <LoadingSpinner color='#fff' />}
      {!isLoading && !error && <List>{renderSpecies()}</List>}
    </Fragment>
  )
}

export default SpeciesList
