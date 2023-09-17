import styled from '@emotion/styled'
import { IPerson } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import { css } from '@emotion/react'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import Apparition from '../../Info/Apparition'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'

const personDataStyles = css({
  position: 'relative',
  padding: '2rem',
  minHeight: '10rem',
})

const FullPersonData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()
  const  getPersonData  = useFetch('people', `person ${id}`, id)

  const {
    data: person,
    error,
    isLoading,
    isFetched,
  } = getPersonData as QueryObserverSuccessResult<IPerson>

  const PersonData = styled.article(personDataStyles)

  const {
    name,
    height,
    mass,
    birth_year,
    eye_color,
    gender,
    hair_color,
    homeworld,
    species,
    starships,
    vehicles,
    films,
  } = person || {}

  return (
    <PersonData>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !error && isFetched && (
        <Fragment>
          <Heading semantic='h3' text={name} />
          <Stats
            type='person'
            person={{
              height,
              mass,
              birth_year,
            }}
          />
          <Apparition {...{ eye_color, hair_color, gender }} />
          <LinkGroup
            type='personData'
            planetId={separateId(homeworld) as string}
            speciesId={species[0] ? (separateId(species[0]) as string) : '1'}
          />
          {vehicles.length > 0 && (
            <LinkGroup
              type='vehicles'
              vehicles={separateId(vehicles) as string[]}
            />
          )}
          {starships.length > 0 && (
            <LinkGroup
              type='starships'
              starships={separateId(starships) as string[]}
            />
          )}
          <LinkGroup type='films' films={separateId(films) as string[]} />
        </Fragment>
      )}
    </PersonData>
  )
}

export default FullPersonData
