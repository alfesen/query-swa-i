import { Fragment, memo } from 'react'
import { useFetch } from '@Hooks/useFetch'
import { TFilm, TInfiniteQuery } from '@Types/units'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import Heading from '@Components/typography/Heading'
import Film from './Film'
import List from '@Components/List/List'

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
      <Film key={crypto.randomUUID()} data={{ ...film }} />
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
