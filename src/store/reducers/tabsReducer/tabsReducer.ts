import { createSlice } from "@reduxjs/toolkit"

export const tabsReducer = createSlice({
  name: "tabsFilter",
  initialState: { tabsFilter: "cheapest" },
  reducers: {
    cheap(state) {
      state.tabsFilter = "cheapest"
    },
    fast(state) {
      state.tabsFilter = "fastest"
    },
    optimal(state) {
      state.tabsFilter = "optimal"
    },
  },
})

export default tabsReducer.reducer
export const { cheap, fast, optimal } = tabsReducer.actions
