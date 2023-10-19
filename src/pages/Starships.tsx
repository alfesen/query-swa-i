import { Fragment } from 'react'
import StarshipList from '@Units/Starships/StarshipList'
import Head from '@/components/UI/Head'

const Starships = () => {
  return (
    <Fragment>
      <Head title='Starships' />
      <StarshipList />
    </Fragment>
  )
}

export default Starships
