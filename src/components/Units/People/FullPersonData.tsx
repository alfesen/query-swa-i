import Apparition from '@Components/Info/Apparition'
import Stats from '@Components/Info/Stats'
import LinkGroup from '@Components/Links/LinkGroup'
import FullData from '@Components/UI/FullData'
import ItemNotFound from '@Components/UI/ItemNotFound'
import LoadingSpinner from '@Components/UI/LoadingSpinner'
import Heading from '@Components/typography/Heading'
import { useFetch } from '@Hooks/useFetch'
import useUnitId from '@Hooks/useUnitId'
import { IPerson } from '@/types/units'
import { AxiosError } from 'axios'
import { Fragment } from 'react'
import { QueryObserverSuccessResult } from 'react-query'

const FullPersonData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()
  const getPersonData = useFetch('people', `person ${id}`, id)

  const {
    data: person,
    error,
    isLoading,
    isFetched,
    isError,
  } = getPersonData as QueryObserverSuccessResult<IPerson>

  if (isError) {
    return <ItemNotFound error={error as unknown as AxiosError} />
  }

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
