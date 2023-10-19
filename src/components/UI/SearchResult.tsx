import List from '../List/List'
import LoadingSpinner from './LoadingSpinner'
import ItemNotFound from './ItemNotFound'
import Person from '../Units/People/Person'
import Species from '../Units/Species/Species'
import Planet from '../Units/Planets/Planet'
import Starship from '../Units/Starships/Starship'
import Vehicle from '../Units/Vehicles/Vehicle'
import Film from '../Units/Films/Film'
import useUnitId from '@/hooks/useUnitId'
import useSearch from '@/hooks/useSearch'
import { AxiosError } from 'axios'
import { TSearchResultItem, TSearchResultMap } from '@/types/ui'

const SearchResult = () => {
  const { separateId } = useUnitId()

  const { results, category, searchTerm } = useSearch()
  const { isLoading, error, data } = results

  const map = {
    people: Person,
    species: Species,
    planets: Planet,
    starships: Starship,
    vehicles: Vehicle,
    films: Film,
  } as TSearchResultMap

  const Component = map[category] ?? (() => null)

  return (
    <>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !data && error && (
        <ItemNotFound error={error as AxiosError} />
      )}
      {!isLoading && data && searchTerm !== '' && (
        <List>
          {data.map((item: TSearchResultItem) => {
            return (
              <Component
                key={crypto.randomUUID()}
                data={{ ...item, id: separateId(item.url) }}
              />
            )
          })}
        </List>
      )}
    </>
  )
}

export default SearchResult
