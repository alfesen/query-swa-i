import { TFilm } from '../../../types/units'
import { QueryObserverSuccessResult } from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'
import FullData from '../../UI/FullData'
import { AxiosError } from 'axios'
import ItemNotFound from '../../UI/ItemNotFound'

const FullFilmData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()
  const getItem = useFetch('films', `film ${id}`, id)
  const {
    data: film,
    error,
    isLoading,
    isFetched,
    isError,
  } = getItem as QueryObserverSuccessResult<TFilm>

  if (isError) {
    return <ItemNotFound error={error as unknown as AxiosError} />
  }

  const {
    episode_id,
    title,
    director,
    producer,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species,
  } = film || {}

  return (
    <FullData>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !error && isFetched && (
        <Fragment>
          <Heading semantic='h3' text={`${episode_id}. ${title}`} />
          <Stats
            type='film'
            film={{ director, producer, release_date, episode_id }}
          />
          <LinkGroup type='vehicles' items={separateId(vehicles) as string[]} />
          <LinkGroup
            type='starships'
            items={separateId(starships) as string[]}
          />
          <LinkGroup type='species' items={separateId(species) as string[]} />
          <LinkGroup
            type='characters'
            items={separateId(characters) as string[]}
          />
          <LinkGroup type='planets' items={separateId(planets) as string[]} />
        </Fragment>
      )}
    </FullData>
  )
}

export default FullFilmData
