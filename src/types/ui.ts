import { AxiosError } from 'axios'
import { HTMLProps, ReactNode } from 'react'
import { EmotionJSX } from 'node_modules/@emotion/react/types/jsx-namespace'

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

export type TSearchResultMap = {
  [key: string]: ({ data }: { data: unknown }) => EmotionJSX.Element
}

export type TSearchResultItem = { [key: string]: unknown } & { url: string }
