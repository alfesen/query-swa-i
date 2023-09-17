import { useState } from 'react'
import { InfiniteQueryObserverResult } from 'react-query'

const usePagination = <T,>(
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<
      {
        results: T[]
      },
      unknown
    >
  >
) => {
  const [page, setPage] = useState<number>(1)

  const nextPageHandler = async () => {
    await fetchNextPage()
    setPage(prevPage => prevPage + 1)
  }

  const previousPageHandler = () => {
    setPage(prevPage => prevPage - 1)
  }

  return { page, nextPageHandler, previousPageHandler }
}

export default usePagination
