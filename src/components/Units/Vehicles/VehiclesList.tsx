import { Fragment } from 'react'
import { useFetch } from '@Hooks/useFetch'
import Heading from '@Components/typography/Heading'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import { TInfiniteQuery, TVehicle } from '@Types/units'
import Vehicle from './Vehicle'
import List from '@Components/List/List'
import usePagination from '@Hooks/usePagination'
import Pagination from '@Components/UI/Pagination'

const SpeciesList = () => {
  const getSpecies = useFetch('vehicles', 'vehicles')
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getSpecies as TInfiniteQuery<TVehicle>

  const { nextPageHandler, previousPageHandler, page } =
    usePagination(fetchNextPage)

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { pages } = data || {}

  const renderVehicles = () => {
    const currentPageData = pages[page - 1] || { results: [] }
    return currentPageData.results.map((vehicle, index) => (
      <Vehicle key={crypto.randomUUID()} vehicleData={{ ...vehicle, id: index + 1 }} />
    ))
  }
  return (
    <Fragment>
      {(isLoading || isFetchingNextPage) && <LoadingSpinner color='#fff' />}
      {isSuccess && (
        <>
          <List>{renderVehicles()}</List>
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
}

export default SpeciesList
