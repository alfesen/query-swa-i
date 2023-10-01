import { TVehicle } from '@Types/units'
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
    return <ItemNotFound error={error as unknown as AxiosError} />
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
