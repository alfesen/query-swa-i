import styled from '@emotion/styled'
import { TSpecies } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import { css } from '@emotion/react'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'

const speciesDataStyles = css({
  position: 'relative',
  padding: '2rem',
  minHeight: '10rem',
})

const FullSpeciesData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()

  const {
    data: species,
    error,
    isLoading,
    isFetched,
  } = useFetch(
    'species',
    `species ${id}`,
    id
  ) as QueryObserverSuccessResult<TSpecies>

  const SpeciesData = styled.article(speciesDataStyles)

  const { name, people, films } = species || {}

  return (
    <SpeciesData>
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
          <LinkGroup type='people' people={separateId(people) as string[]} />
          <LinkGroup type='films' films={separateId(films) as string[]} />
        </Fragment>
      )}
    </SpeciesData>
  )
}

export default FullSpeciesData
