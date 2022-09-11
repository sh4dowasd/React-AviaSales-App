import { createSlice } from "@reduxjs/toolkit"

export const filtersReducer = createSlice({
  name: "checkFilter",
  initialState: { checkFilter: [true, true, true, true, true] },
  reducers: {
    All(state) {
      state.checkFilter = state.checkFilter.map(() => !state.checkFilter[0])
    },
    Zero(state) {
      state.checkFilter = state.checkFilter.map((elem, index) => (index === 1 ? !elem : elem))
      state.checkFilter = state.checkFilter.slice(1).includes(false)
        ? [false, ...state.checkFilter.slice(1)]
        : [true, ...state.checkFilter.slice(1)]
    },
    One(state) {
      state.checkFilter = state.checkFilter.map((el, index) => (index === 1 ? !el : el))
      state.checkFilter = state.checkFilter.slice(1).includes(false)
        ? [false, ...state.checkFilter.slice(1)]
        : [true, ...state.checkFilter.slice(1)]
    },
    Two(state) {
      state.checkFilter = state.checkFilter.map((el, index) => (index === 1 ? !el : el))
      state.checkFilter = state.checkFilter.slice(1).includes(false)
        ? [false, ...state.checkFilter.slice(1)]
        : [true, ...state.checkFilter.slice(1)]
    },
    Three(state) {
      state.checkFilter = state.checkFilter.map((el, index) => (index === 1 ? !el : el))
      state.checkFilter = state.checkFilter.slice(1).includes(false)
        ? [false, ...state.checkFilter.slice(1)]
        : [true, ...state.checkFilter.slice(1)]
    },
  },
})

export default filtersReducer.reducer
export const { All, Zero, One, Two, Three } = filtersReducer.actions
