import { Fragment } from 'react'
import PlanetList from '@Units/Planets/PlanetList'
import Head from '@/components/UI/Head'

const Planets = () => {
  return (
    <Fragment>
      <Head title='Planets' />
      <PlanetList />
    </Fragment>
  )
}

export default Planets
