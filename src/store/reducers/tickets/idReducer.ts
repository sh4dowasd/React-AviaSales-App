import { createSlice } from "@reduxjs/toolkit"

import fetchTicketsId from "../../../api"

const initialState: { id: string } = {
  id: "",
}

export const TicketReducerIdSlice = createSlice({
  name: "changeTicketId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsId.pending, (state) => {
        state.id = ""
      })
      .addCase(fetchTicketsId.fulfilled, (state, action) => {
        state.id = action.payload.searchId
      })
      .addCase(fetchTicketsId.rejected, (state) => {
        state.id = ""
        console.log("Ошибка запроса id")
      })
  },
})

export default TicketReducerIdSlice.reducer
