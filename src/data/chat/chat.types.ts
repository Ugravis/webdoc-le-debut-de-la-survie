export type PlayerStats = "budget" | "mentalHealth" | "school"

interface PlayerEffect {
  cible: PlayerStats
  value: number
}

export interface Choice {
  content: string
  timestamp: string
  nextNodeId: number
  playerEffects: PlayerEffect[]
}

export interface Message {
  messageId: number
  from: string
  content: string
  timestamp: string 
}

export interface NodeMessages {
  nodeId: number
  messages: Message[]
  choices: Choice[]
}

export type Nodes = NodeMessages[]