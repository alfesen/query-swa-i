import { Fragment, memo } from 'react'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { useFetch } from '../../../hooks/useFetch'
import { TFilm, TInfiniteQuery } from '../../../types/units'
import Heading from '../../typography/Heading'
import Film from './Film'
import List from '../../List/List'

const PeopleList = memo(() => {
  const getFilms = useFetch('films', 'films')

  const { data, error, isLoading, isSuccess } =
    getFilms as TInfiniteQuery<TFilm>

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }
  const { pages } = data || {}

  const renderFilms = () => {
    return pages[0].results.map(film => (
      <Film key={crypto.randomUUID()} filmData={{ ...film }} />
    ))
  }

  return (
    <Fragment>
      {isLoading && <LoadingSpinner color='#fff' />}
      {isSuccess && (
        <>
          <List>{renderFilms()}</List>
        </>
      )}
    </Fragment>
  )
})

export default PeopleList
