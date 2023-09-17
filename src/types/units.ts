import { InfiniteQueryObserverSuccessResult } from 'react-query'
import { TUnused } from './unused'

export type UnitBase = TUnused & {
  id: number
}

export type IPerson = UnitBase & {
  name: string
  height: number | string
  mass: number | string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: number | string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
}

export type TPlanet = UnitBase & {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
}

export type TSpecies = UnitBase & {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: string
  language: string
  people: string[]
  films: string[]
}

export type TVehicle = UnitBase & {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: never[]
  films: string[]
}

export type TInfiniteQuery<T> = InfiniteQueryObserverSuccessResult<{
  results: T[]
  next: string | null
}>
