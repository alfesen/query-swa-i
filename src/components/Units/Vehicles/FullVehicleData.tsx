import { TVehicle } from '../../../types/units'
import {
  QueryObserverSuccessResult,
} from 'react-query'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Heading from '../../typography/Heading'
import Stats from '../../Info/Stats'
import { useFetch } from '../../../hooks/useFetch'
import { Fragment } from 'react'
import LinkGroup from '../../Links/LinkGroup'
import useUnitId from '../../../hooks/useUnitId'
import FullData from '../../UI/FullData'
import { AxiosError } from 'axios'

const FullVehicleData = ({ id }: { id: number }) => {
  const { separateId } = useUnitId()

  const getVehicleData = useFetch('vehicles', `vehicles ${id}`, id)

  const {
    data: vehicle,
    isError,
    error,
    isLoading,
    isFetched,
  } = getVehicleData as QueryObserverSuccessResult<TVehicle>

  if (isError) {
    const { detail } = (error as unknown as AxiosError).response?.data as {
      detail: string
    }
    return (
      <FullData>
        <Heading semantic='h1' text={detail} />
      </FullData>
    )
  }

  const { name, films, pilots } = vehicle || {}

  return (
    <FullData>
      {isLoading && <LoadingSpinner color='#333' />}
      {!isLoading && !error && isFetched && (
        <Fragment>
          <Heading semantic='h3' text={name} />
          <Stats
            type='vehicle'
            vehicle={{
              ...vehicle,
            }}
          />
          <LinkGroup type='pilots' items={separateId(pilots) as string[]} />
          <LinkGroup type='films' items={separateId(films) as string[]} />
        </Fragment>
      )}
    </FullData>
  )
}

export default FullVehicleData
