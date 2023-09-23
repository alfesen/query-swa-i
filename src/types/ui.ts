import { AxiosError } from 'axios'
import { ReactNode } from 'react'

export type TSpinner = {
  color: string
}

export type TModal = {
  children: ReactNode
  onClose: () => void
}

export type TPagination = {
  isNextPage: boolean
  toNextPage: () => void
  toPreviousPage: () => void
  value: number
}

export type TError = {
  error: AxiosError
}
