import { useSearchParams } from 'react-router-dom'
import useDebouncedValue from './useDebouncedValue'
import { useQuery } from 'react-query'
import axios from 'axios'

const useSearch = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('c') ?? ''
  const searchTerm = searchParams.get('s') ?? ''
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300)

  const results = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://swapi.dev/api/${category}?search=${searchTerm}`
      )

      return data.results
    },
    refetchOnWindowFocus: false,
  })

  return { results, category, searchTerm: debouncedSearchTerm }
}

export default useSearch
