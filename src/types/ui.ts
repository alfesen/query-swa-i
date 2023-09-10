import { ReactNode } from 'react'

export type TSpinner = {
  color: string
}

export type TModal = {
  children: ReactNode
  onClose: () => void
}

export type TLinkGroup =
  | { type: 'personData'; planetId: string; speciesId: string }
  | { type: 'vehicles'; vehicles: string[] }
  | { type: 'starships'; starships: string[] }
  | { type: 'films'; films: string[] }
