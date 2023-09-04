import axios from 'axios'
import { useQuery } from 'react-query'

export const useFetch = (category: string, key: string, id?: number) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://swapi.dev/api/${category}/${id ? id : ''}`
      )
      return data
    },
    refetchOnWindowFocus: false,
  })
}
