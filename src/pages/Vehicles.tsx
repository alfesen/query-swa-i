import { Fragment } from 'react'
import VehiclesList from '@Units/Vehicles/VehiclesList'
import Head from '@/components/UI/Head'

const Vehicles = () => {
  return (
    <Fragment>
      <Head title='Vehicles' />
      <VehiclesList />
    </Fragment>
  )
}

export default Vehicles
