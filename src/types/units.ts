export type IPerson = {
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
  created: string
  edited: string
  url: string
} & { id: number }

export type TPlanet = {
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
  created: string
  edited: string
  url: string
} & { id: number }
