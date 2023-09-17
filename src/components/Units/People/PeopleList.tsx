import { Fragment, memo } from 'react' // Import React and useState
import { InfiniteQueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { useFetch } from '../../../hooks/useFetch'
import { IPerson } from '../../../types/units'
import Heading from '../../typography/Heading'
import Person from './Person'
import List from '../../List/List'
import Pagination from '../../UI/Pagination'
import usePagination from '../../../hooks/usePagination'

const PeopleList = memo(() => {
  const getPeople = useFetch('people', 'people')

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = getPeople as InfiniteQueryObserverSuccessResult<{
    results: IPerson[]
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
    return currentPageData.results.map((person, index) => (
      <Person key={person.name} personData={{ ...person, id: index + 1 }} />
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
