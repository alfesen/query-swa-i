import { Fragment, memo } from 'react'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import { useFetch } from '@Hooks/useFetch'
import { TInfiniteQuery, TPlanet } from '@Types/units'
import Heading from '@Components/typography/Heading'
import Planet from './Planet'
import List from '@Components/List/List'
import usePagination from '@Hooks/usePagination'
import Pagination from '@Components/UI/Pagination'

const PlanetList = memo(() => {
  const getPlanets = useFetch('planets', 'planets')

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getPlanets as TInfiniteQuery<TPlanet>

  const { nextPageHandler, previousPageHandler, page } =
    usePagination(fetchNextPage)

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { pages } = data || {}

  const renderPeople = () => {
    const currentPageData = pages[page - 1] || { results: [] }
    return currentPageData.results.map((planet, index) => (
      <Planet
        key={crypto.randomUUID()}
        planetData={{ ...planet, id: index + 1 }}
      />
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
