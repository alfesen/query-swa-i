import { FetchNextPageResult } from '@/types/helpers'
import { useState } from 'react'

const usePagination = <T,>(fetchNextPage: FetchNextPageResult<T>) => {
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
