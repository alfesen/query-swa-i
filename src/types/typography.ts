import { IPerson, TFilm, TPlanet, TSpecies, TStarship, TVehicle } from './units'
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
      species: Omit<TSpecies, TUnusedKeys | 'people' | 'films'>
    }
  | {
      type: 'vehicle'
      vehicle: Omit<TVehicle, TUnusedKeys | 'pilots' | 'films'>
    }
  | {
      type: 'starship'
      starship: Omit<TStarship, TUnusedKeys | 'pilots' | 'films'>
    }
  | {
      type: 'film'
      film: Pick<TFilm, 'director' | 'producer' | 'episode_id' | 'release_date'>
    }

type TStatItemData = {
  name: string
  value: string
  spaces?: boolean
}

export type TStatItem = {
  stats: TStatItemData | TStatItemData[]
  block?: boolean
}

export type TApparition = Pick<IPerson, 'eye_color' | 'hair_color'> & {
  skin_color?: IPerson['skin_color']
  gender?: IPerson['gender']
}

export type TLink = { to: string; text: string }

export type TLinkGroupItem = {
  name: string
  paramName: string
  text: string
  ids: string[]
}

export type TLinkGTLinkGroup =
  | { type: 'personData'; planetId: string; speciesId: string }
  | { type: 'people'; people: string[] }
  | { type: 'vehicles'; vehicles: string[] }
  | { type: 'starships'; starships: string[] }
  | { type: 'films'; films: string[] }
  | { type: 'residents'; residents: string[] }
  | { type: 'pilots'; vehicles: string[] }
  | { type: 'characters'; characters: string[] }
  | { type: 'planets'; planets: string[] }
  | { type: 'species'; species: string[] }

export type TLinkGroup =
  | { type: 'personData'; planetId: string; speciesId: string }
  | {
      type:
        | 'people'
        | 'vehicles'
        | 'starships'
        | 'films'
        | 'residents'
        | 'pilots'
        | 'species'
        | 'characters'
        | 'planets'
      items: string[]
    }
