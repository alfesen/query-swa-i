import { InfiniteQueryObserverSuccessResult } from 'react-query'
import { TUnused } from './unused'
import { Prettify } from './helpers'

export type UnitBase = Prettify<
  TUnused & {
    id: number
    films: string[]
  }
>

export type IPerson = Prettify<
  UnitBase & {
    name: string
    height: number | string
    mass: number | string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: number | string
    gender: string
    homeworld: string
    species: string[]
    vehicles: string[]
    starships: string[]
  }
>

export type TPlanet = Prettify<
  UnitBase & {
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
  }
>

export type TSpecies = Prettify<
  UnitBase & {
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
  }
>

type TVehicleBase = UnitBase & {
  name: string
  pilots: never[]
  passengers: string
  cargo_capacity: string
  consumables: string
  manufacturer: string
  cost_in_credits: string
  model: string
  length: string
  max_atmosphering_speed: string
  crew: string
}

export type TVehicle = Prettify<
  TVehicleBase & {
    vehicle_class: string
  }
>

export type TStarship = Prettify<
  TVehicleBase & {
    starship_class: string
    MGLT: string
    hyperdrive_rating: string
    detail?: string
  }
>

export type TInfiniteQuery<T> = InfiniteQueryObserverSuccessResult<{
  results: T[]
  next: string | null
}>

export type TFilm = Prettify<
  TUnused & {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
  }
>
