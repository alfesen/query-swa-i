import List from '@Components/List/List'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import Pagination from '@Components/UI/Pagination'
import Heading from '@Components/typography/Heading'
import { useFetch } from '@Hooks/useFetch'
import usePagination from '@Hooks/usePagination'
import { IPerson, TInfiniteQuery } from '@/types/units'
import { Fragment, memo } from 'react'
import Person from './Person'

const PeopleList = memo(() => {
  const getPeople = useFetch('people', 'people')

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getPeople as TInfiniteQuery<IPerson>

  const { nextPageHandler, previousPageHandler, page } =
    usePagination(fetchNextPage)

  if (!isLoading && !data && error) {
    return <Heading semantic='h2' text='Error, no data fetched' />
  }
  const { pages } = data || {}

  const renderPeople = () => {
    const currentPageData = pages[page - 1] || { results: [] }
    return currentPageData.results.map((person, index) => (
      <Person key={crypto.randomUUID()} data={{ ...person, id: index + 1 }} />
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

export default PeopleList
