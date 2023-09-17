import { Global, css } from '@emotion/react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Fragment } from 'react'
import MainLayout from './layout/MainLayout'
import People from './pages/People'
import Species from './pages/Species'
import Planets from './pages/Planets'
import Vehicles from './pages/Vehicles'

const globalStyles = css({
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
  },
  body: {
    fontFamily: '"Barlow", sans-serif',
    '.overlay': {
      zIndex: '200',
    },
  },
  'h1, h2, h3, h4': {
    fontWeight: 400,
  },
  ul: {
    listStyle: 'none',
  },
})

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate replace to='/people' /> },
        { path: '/people', element: <People /> },
        { path: '/planets', element: <Planets /> },
        { path: '/species', element: <Species /> },
        { path: '/vehicles', element: <Vehicles /> },
      ],
    },
  ])

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <RouterProvider router={routes} />
    </Fragment>
  )
}

export default App
