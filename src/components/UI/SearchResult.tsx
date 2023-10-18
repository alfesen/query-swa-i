import List from '../List/List'
import LoadingSpinner from './LoadingSpinner'
import ItemNotFound from './ItemNotFound'
import Person from '../Units/People/Person'
import Species from '../Units/Species/Species'
import Planet from '../Units/Planets/Planet'
import Starship from '../Units/Starships/Starship'
import Vehicle from '../Units/Vehicles/Vehicle'
import Film from '../Units/Films/Film'
import { EmotionJSX } from 'node_modules/@emotion/react/types/jsx-namespace'
import useUnitId from '@/hooks/useUnitId'
import useSearch from '@/hooks/useSearch'
import { AxiosError } from 'axios'

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
  } as {
    [key: string]: ({ data }: { data: unknown }) => EmotionJSX.Element
  }

  const Component = map[category] ?? (() => null)

  return (
    <>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !data && error && (
        <ItemNotFound error={error as AxiosError} />
      )}
      {!isLoading && data && searchTerm !== '' && (
        <List>
          {data.map((item: { [key: string]: unknown } & { url: string }) => {
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
