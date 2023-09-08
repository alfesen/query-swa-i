import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import Modal from '../components/UI/Modal'
import FullPersonData from '../components/Units/People/FullPersonData'
import PeopleList from '../components/Units/People/PeopleList'
import { useModal } from '../hooks/useModal'
import { Fragment } from 'react'

const People = () => {
  const { closeModal } = useModal()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const hideFullPersonData = () => {
    closeModal()
    navigate(location.pathname.split('?')[0])
  }

  const personId = Number(searchParams.get('person'))

  return (
    <Fragment>
      {personId ? (
        <Modal onClose={hideFullPersonData}>
          <FullPersonData id={personId} />
        </Modal>
      ) : null}
      <PeopleList />
    </Fragment>
  )
}

export default People
