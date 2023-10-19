import { Fragment } from 'react'
import SpeciesList from '@Units/Species/SpeciesList'
import Head from '@/components/UI/Head'

const Species = () => {
  return (
    <Fragment>
      <Head title='Species' />
      <SpeciesList />
    </Fragment>
  )
}

export default Species
