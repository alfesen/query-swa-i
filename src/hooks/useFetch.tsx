import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'

export const useFetch = (category: string, key: string, id?: number) => {
  const getPages = useInfiniteQuery({
    queryKey: [key, category, id],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await axios.get(`https://swapi.dev/api/${category}/`, {
        params: {
          page: pageParam,
        },
      })
      return data
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) {
        return allPages.length + 1
      }
      return undefined
    },
    refetchOnWindowFocus: false,
  })

  const getItem = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://swapi.dev/api/${category}/${id ? id : ''}`
      )
      return data
    },
    refetchOnWindowFocus: false,
  })

 if (id) return getItem
 return getPages
}
