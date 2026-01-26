import { type PlayerStats } from "../chat/chat.types"

export interface PlayerEffect {
  cible: PlayerStats
  value: number
}

export interface Character {
  id: number
  name: string
  age: number
  image: string
}

export interface City {
  id: number
  name: string
  department: string
  region: string
  image: string
  effects: PlayerEffect[]
  studiesNodeId: number
}

export interface StudyOption {
  id: number
  university: string
  school: string
  field: string
}

export interface StudiesNode {
  id: number
  nodeId: number
  options: StudyOption[]
}

export interface ChoicesData {
  characters: Character[]
  city: City[]
  studies: StudiesNode[]
}