import { Fragment, memo } from 'react'
import { InfiniteQueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { useFetch } from '../../../hooks/useFetch'
import { TPlanet } from '../../../types/units'
import Heading from '../../typography/Heading'
import Planet from './Planet'
import List from '../../List/List'
import usePagination from '../../../hooks/usePagination'
import Pagination from '../../UI/Pagination'

const PlanetList = memo(() => {
  const getPlanets = useFetch('planets', 'planets')

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getPlanets as InfiniteQueryObserverSuccessResult<{
    results: TPlanet[]
    next: string | null
  }>

  const { nextPageHandler, previousPageHandler, page } =
    usePagination(fetchNextPage)

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { pages } = data || {}

  const renderPeople = () => {
    const currentPageData = pages[page - 1] || { results: [] }
    return currentPageData.results.map((planet, index) => (
      <Planet key={planet.name} planetData={{ ...planet, id: index + 1 }} />
    ))
  }
  return (
    <Fragment>
      {(isLoading || isFetchingNextPage) && <LoadingSpinner color='#fff' />}
      {isSuccess && (
        <>
          <List>{renderPeople()}</List>
          <Pagination
            toNextPage={nextPageHandler}
            isNextPage={pages[page - 1].next != null ? true : false}
            toPreviousPage={previousPageHandler}
            value={page}
          />
        </>
      )}
    </Fragment>
  )
})

export default PlanetList
