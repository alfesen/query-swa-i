import { ReactNode } from 'react'

export type TSpinner = {
  color: string
}

export type TModal = {
  children: ReactNode
  onClose: () => void
}
