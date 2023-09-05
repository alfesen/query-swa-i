import { useState } from 'react'

export const useModal = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  const openModal = () => setIsShowModal(true)
  const closeModal = () => setIsShowModal(false)

  return { openModal, closeModal, isShowModal }
}
