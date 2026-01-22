import type { StateCreator } from "zustand"

export interface CounterSlice {
  counter: number
  setCounter: (value: number) => void
  increaseCounter: () => void
  decreaseCounter: () => void
  resetCounter: () => void
}

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  counter: 0,

  setCounter: (value: number) => {
    set({ counter: value })
  },

  increaseCounter: () => {
    set((state) => ({ counter: state.counter + 1 }))
  },

  decreaseCounter: () => {
    set((state) => ({ counter: state.counter - 1 }))
  },

  resetCounter: () => {
    set({ counter: 0 })
  }
})