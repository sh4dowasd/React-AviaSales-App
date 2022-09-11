/* eslint-disable default-param-last */
import { createSlice } from "@reduxjs/toolkit"

import { IIniat } from "../../../components/models"
import { fetchSomeTickets } from "../../../api"

const initialState: IIniat = {
  someTickets: [],
  someFilterTickets: [],
  visibleTickets: [],
  status: "",
  error: null,
}

export const TicketReducerSlice = createSlice({
  name: "changeTicket",
  initialState,
  reducers: {
    changeCheapFilter(state) {
      state.visibleTickets = state.someTickets.sort((a, b) => a.price - b.price)
    },
    changeFastFilter(state) {
      state.visibleTickets = state.someTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    },
    changeOptimalFilter(state) {
      state.visibleTickets = state.someTickets
        .filter((elem) => {
          return elem.segments[0].stops.length === 0 && elem.segments[1].stops.length === 0
        })
        .sort((a, b) => a.price - b.price)
    },
    changeTransferFilter(state, action) {
      const arrCheckTrans = action.payload.slice(1).map((elem: Array<boolean>, index: number) => (elem ? index : null))
      state.visibleTickets = state.visibleTickets.filter((elem) =>
        arrCheckTrans.includes(elem.segments[0].stops.length)
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSomeTickets.pending, (state) => {
        state.status = "pending"
      })
      .addCase(fetchSomeTickets.fulfilled, function addTickets(state, action) {
        state.someTickets = state.someTickets.concat(action.payload.tickets)
        state.visibleTickets = state.visibleTickets.concat(action.payload.tickets)
        state.status = "ready"
        console.log(state.someTickets)
      })
      .addCase(fetchSomeTickets.rejected, (state, action) => {
        state.status = action.error.message
        state.error = action.payload
      })
  },
})

export default TicketReducerSlice.reducer
export const { changeCheapFilter, changeFastFilter, changeOptimalFilter, changeTransferFilter } =
  TicketReducerSlice.actions
