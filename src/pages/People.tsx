import Head from '@/components/UI/Head'
import PeopleList from '@Units/People/PeopleList'
import { Fragment } from 'react'

const People = () => {
  return (
    <Fragment>
      <Head title='People' />
      <PeopleList />
    </Fragment>
  )
}

export default People
