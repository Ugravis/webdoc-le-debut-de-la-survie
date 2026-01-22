import { create } from "zustand"
import { createCounterSlice, type CounterSlice } from "./slices/counterSlice"
import { createPlayerSlice, type PlayerSlice } from "./slices/playerStatsSlice"

export type StoreState = CounterSlice & PlayerSlice

export const useStore = create<StoreState>()((...a) => ({
  ...createCounterSlice(...a),
  ...createPlayerSlice(...a)
}))