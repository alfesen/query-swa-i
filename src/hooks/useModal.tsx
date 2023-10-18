import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useModal = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const openModal = () => setIsShowModal(true)
  const closeModal = () => setIsShowModal(false)

  const showFullData = (param: string, id: number) => {
    if (location.pathname.includes('search')) {
      searchParams.set(param, id.toString())
      return setSearchParams(searchParams)
    }
    setSearchParams(`${param}=${id}`)
  }

  return { openModal, closeModal, isShowModal, showFullData }
}
