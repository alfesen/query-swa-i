import Head from '@/components/UI/Head'
import FilmList from '@Units/Films/FilmList'
import { Fragment } from 'react'

const Films = () => {
  return (
    <Fragment>
      <Head title='Films' />
      <FilmList />
    </Fragment>
  )
}

export default Films
