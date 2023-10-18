import { Fragment } from 'react'
import { useFetch } from '@Hooks/useFetch'
import Heading from '@Components/typography/Heading'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import { TInfiniteQuery, TStarship } from '@Types/units'
import Starship from './Starship'
import List from '@Components/List/List'
import usePagination from '@Hooks/usePagination'
import Pagination from '@Components/UI/Pagination'

const SpeciesList = () => {
  const getSpecies = useFetch('starships', 'starships')
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getSpecies as TInfiniteQuery<TStarship>

  const { nextPageHandler, previousPageHandler, page } =
    usePagination(fetchNextPage)

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { pages } = data || {}

  const renderStarships = () => {
    const currentPageData = pages[page - 1] || { results: [] }
    return currentPageData.results.map((starship, index) => (
      <Starship
        key={crypto.randomUUID()}
        data={{ ...starship, id: index + 1 }}
      />
    ))
  }
  return (
    <Fragment>
      {(isLoading || isFetchingNextPage) && <LoadingSpinner color='#fff' />}
      {isSuccess && (
        <>
          <List>{renderStarships()}</List>
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
