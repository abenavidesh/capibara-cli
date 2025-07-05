export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  types: { type: { name: string } }[]
  abilities?: { ability: { name: string } }[]
  [key: string]: any
}
