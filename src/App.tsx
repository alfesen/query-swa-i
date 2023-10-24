import { Global, css } from '@emotion/react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Fragment, lazy, Suspense } from 'react'
import MainLayout from '@Layout/MainLayout'
import LoadingSpinner from './components/UI/LoadingSpinner'
const People = lazy(() => import('@Pages/People'))
const Species = lazy(() => import('@Pages/Species'))
const Planets = lazy(() => import('@Pages/Planets'))
const Vehicles = lazy(() => import('@Pages/Vehicles'))
const Starships = lazy(() => import('@Pages/Starships'))
const Films = lazy(() => import('@Pages/Films'))
const Search = lazy(() => import('./pages/Search'))

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
    overflowX: 'hidden'
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
        { path: '/search', element: <Search /> },
      ],
    },
  ])

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Suspense fallback={<LoadingSpinner color='#333' />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Fragment>
  )
}

export default App
