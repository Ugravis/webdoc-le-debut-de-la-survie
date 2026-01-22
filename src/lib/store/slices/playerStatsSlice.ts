import type { StateCreator } from "zustand"
import type { Character, City, StudyOption } from "../../../data/choices/choices.types"

interface Stat {
  current: number
}

interface PlayerStats {
  budget: Stat
  mentalHealth: Stat
  school: Stat
}

interface Player {
  character?: Character
  city?: City
  studies?: StudyOption
  stats: PlayerStats
}

export interface PlayerSlice {
  player: Player

  setCharacter: (value: Character) => void
  setCity: (value: City) => void
  setStudy: (value: StudyOption) => void

  setBudget: (value: number) => void
  setMentalHealth: (value: number) => void
  setSchool: (value: number) => void

  reset: () => void
}

const initialPlayerState: Player = {
  stats: {
    budget: { current: 0 },
    mentalHealth: { current: 0 },
    school: { current: 0 }
  }
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set) => ({
  player: initialPlayerState,

  setCharacter: (value) => {
    set((state) => ({
      player: { ...state.player, character: value }
    }))
  },
  setCity: (value) => {
    set((state) => ({
      player: { ...state.player, city: value }
    }))
  },
  setStudy: (value) => {
    set((state) => ({
      player: { ...state.player, studies: value }
    }))
  },
  
  setBudget: (value) => {
    set((state) => ({ 
      player: { ...state.player, stats: { ...state.player.stats, budget: { current: value } } } 
    }))
  },
  setMentalHealth: (value) => {
    set((state) => ({ 
      player: { ...state.player, stats: { ...state.player.stats, mentalHealth: { current: value } } } 
    }))
  },
  setSchool: (value) => {
    set((state) => ({ 
      player: { ...state.player, stats: { ...state.player.stats, school: { current: value } } } 
    }))
  },

  reset: () => set({ player: initialPlayerState })
})