import { Fragment, memo } from 'react'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { useFetch } from '../../../hooks/useFetch'
import { IPerson } from '../../../types/units'
import Heading from '../../typography/Heading'
import Person from './Person'
import List from '../../List/List'

const PeopleList = memo(() => {
  const { data, error, isLoading } = useFetch(
    'people',
    'people'
  ) as QueryObserverSuccessResult<{ results: IPerson[] }>

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { results: people } = data || {}

  const renderPeople = () =>
    people.map((person, index) => (
      <Person
        key={crypto.randomUUID()}
        personData={{ ...person, id: index + 1 }}
      />
    ))

  return (
    <Fragment>
      {isLoading && <LoadingSpinner color='#fff' />}
      {!isLoading && !error && <List>{renderPeople()}</List>}
    </Fragment>
  )
})

export default PeopleList
