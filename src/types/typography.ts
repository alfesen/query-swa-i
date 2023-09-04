import { IPerson } from "./units"

export type THeading = {
  semantic: 'h1' | 'h2' | 'h3' | 'h4'
  text: string
}

export type TParagraph = { text: string | number }

export type TStats = {
  type: 'person'
  person: Pick<IPerson, 'height' | 'mass' | 'birth_year'>
}

export type TApparition = Pick<IPerson, 'gender' | 'eye_color' | 'hair_color'>
