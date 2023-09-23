import { IPerson } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import Apparition from '../../Info/Apparition'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'
import FullData from '../../UI/FullData'

const FullPersonData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()
  const  getPersonData  = useFetch('people', `person ${id}`, id)

  const {
    data: person,
    error,
    isLoading,
    isFetched,
  } = getPersonData as QueryObserverSuccessResult<IPerson>

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
    <FullData>
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
              items={separateId(vehicles) as string[]}
            />
          )}
          {starships.length > 0 && (
            <LinkGroup
              type='starships'
              items={separateId(starships) as string[]}
            />
          )}
          <LinkGroup type='films' items={separateId(films) as string[]} />
        </Fragment>
      )}
    </FullData>
  )
}

export default FullPersonData
