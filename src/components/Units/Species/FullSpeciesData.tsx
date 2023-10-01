import { TSpecies } from '@Types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import Heading from '@Components/typography/Heading'
import Stats from '@Components/Info/Stats'
import { useFetch } from '@Hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '@Components/Links/LinkGroup'
import useUnitId from '@Hooks/useUnitId'
import FullData from '@Components/UI/FullData'
import { AxiosError } from 'axios'
import ItemNotFound from '@Components/UI/ItemNotFound'

const FullSpeciesData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()

  const getSpeciesData = useFetch('species', `species ${id}`, id)

  const {
    data: species,
    error,
    isLoading,
    isFetched,
    isError,
  } = getSpeciesData as QueryObserverSuccessResult<TSpecies>

  if (isError) {
    return <ItemNotFound error={error as unknown as AxiosError} />
  }

  const { name, people, films } = species || {}

  return (
    <FullData>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !error && isFetched && (
        <Fragment>
          <Heading semantic='h3' text={name} />
          <Stats
            type='species'
            species={{
              ...species,
            }}
          />
          <LinkGroup type='people' items={separateId(people) as string[]} />
          <LinkGroup type='films' items={separateId(films) as string[]} />
        </Fragment>
      )}
    </FullData>
  )
}

export default FullSpeciesData
