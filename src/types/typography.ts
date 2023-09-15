import { IPerson, TPlanet, TSpecies } from './units'
import { TUnusedKeys } from './unused'

export type THeading = {
  semantic: 'h1' | 'h2' | 'h3' | 'h4'
  text: string
}

export type TParagraph = { text: string | number }

export type TStats =
  | {
      type: 'person'
      person: Pick<IPerson, 'height' | 'mass' | 'birth_year'>
    }
  | {
      type: 'planet'
      planet: Omit<TPlanet, TUnusedKeys | 'residents' | 'films'>
    }
  | {
      type: 'species'
      species: Omit<TSpecies, TUnusedKeys | 'people'>
    }

export type TApparition = Pick<IPerson, 'gender' | 'eye_color' | 'hair_color'>

export type TLinkGroup =
  | { type: 'personData'; planetId: string; speciesId: string }
  | { type: 'people'; people: string[] }
  | { type: 'vehicles'; vehicles: string[] }
  | { type: 'starships'; starships: string[] }
  | { type: 'films'; films: string[] }
  | { type: 'residents'; residents: string[] }
