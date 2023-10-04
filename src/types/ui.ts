import { AxiosError } from 'axios'
import { HTMLProps, ReactNode } from 'react'

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

export type TNavLinks = {
  setShowNav?: (showNav: false) => void
}

export type TRocketButton = HTMLProps<HTMLButtonElement> & { active: boolean }