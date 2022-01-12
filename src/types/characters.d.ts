export interface Characters {
  name: string
  alternate_names?: (string | null)[] | null
  species: string
  gender: string
  house: string
  dateOfBirth: string
  yearOfBirth: number | string
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: Wand
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alternate_actors?: (string | null)[] | null
  alive: boolean
  image: string
}

export interface Wand {
  wood: string
  core: string
  length: number | string
}
