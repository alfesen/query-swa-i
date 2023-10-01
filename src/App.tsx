import { Global, css } from '@emotion/react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Fragment } from 'react'
import MainLayout from '@Layout/MainLayout'
import People from '@Pages/People'
import Species from '@Pages/Species'
import Planets from '@Pages/Planets'
import Vehicles from '@Pages/Vehicles'
import Starships from '@Pages/Starships'
import Films from '@Pages/Films'

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
        { path: '/starships', element: <Starships /> },
        { path: '/films', element: <Films /> },
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
