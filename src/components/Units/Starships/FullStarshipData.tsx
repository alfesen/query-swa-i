import { TStarship } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'
import FullData from '../../UI/FullData'
import StatItem from '../../Info/StatItem'
import { AxiosError } from 'axios'
import ItemNotFound from '../../UI/ItemNotFound'

const FullStarshipData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()

  const getStarshipData = useFetch('starships', `starships ${id}`, id)

  const {
    data: starship,
    error,
    isLoading,
    isError,
    isFetched,
  } = getStarshipData as QueryObserverSuccessResult<TStarship>

  if (isError) {
    return <ItemNotFound error={error as unknown as AxiosError} />
  }

  const { name, films, pilots, MGLT, hyperdrive_rating, starship_class } =
    starship || {}
  return (
    <FullData>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !error && isFetched && (
        <Fragment>
          <Heading semantic='h3' text={name} />
          <Heading semantic='h4' text={`${starship_class}`} />
          <Stats
            type='starship'
            starship={{
              ...starship,
            }}
          />
          <StatItem
            stats={[
              { name: 'MGLT', value: MGLT, spaces: true },
              { name: 'HypDrRat', value: hyperdrive_rating },
            ]}
          />
          <LinkGroup type='pilots' items={separateId(pilots) as string[]} />
          <LinkGroup type='films' items={separateId(films) as string[]} />
        </Fragment>
      )}
    </FullData>
  )
}

export default FullStarshipData
