import { Fragment } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { InfiniteQueryObserverSuccessResult } from 'react-query'
import Heading from '../../typography/Heading'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { TSpecies } from '../../../types/units'
import Species from './Species'
import List from '../../List/List'
import usePagination from '../../../hooks/usePagination'
import Pagination from '../../UI/Pagination'

const SpeciesList = () => {
  const getSpecies = useFetch('species', 'species')
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getSpecies as InfiniteQueryObserverSuccessResult<{
    results: TSpecies[]
    next: string | null
  }>

  const { nextPageHandler, previousPageHandler, page } =
    usePagination(fetchNextPage)

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }

  const { pages } = data || {}

  const renderSpecies = () => {
    const currentPageData = pages[page - 1] || { results: [] }
    return currentPageData.results.map((species, index) => (
      <Species key={species.name} speciesData={{ ...species, id: index + 1 }} />
    ))
  }
  return (
    <Fragment>
      {(isLoading || isFetchingNextPage) && <LoadingSpinner color='#fff' />}
      {isSuccess && (
        <>
          <List>{renderSpecies()}</List>
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
