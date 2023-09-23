import { TSpecies } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'
import FullData from '../../UI/FullData'


const FullSpeciesData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()

  const  getSpeciesData  = useFetch('species', `species ${id}`, id)

  const {
    data: species,
    error,
    isLoading,
    isFetched,
  } = getSpeciesData as QueryObserverSuccessResult<TSpecies>

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
