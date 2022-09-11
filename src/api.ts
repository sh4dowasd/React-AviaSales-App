import { createAsyncThunk } from "@reduxjs/toolkit"

import { ITicket } from "./components/models"

export const fetchTicketsId = createAsyncThunk<{ searchId: string }, void, {}>("changeTicketId/fetchTicketsId", () =>
  fetch(`https://front-test.dev.aviasales.ru/search`)
    .then((res) => res.json())
    .then((res) => res)
)

interface IRes {
  tickets: Array<ITicket>
  stop: boolean
}

export const fetchSomeTickets = createAsyncThunk<IRes, string, {}>(
  "changeTicket/fetchTickets",
  async (id: string, { rejectWithValue }) => {
    if (id === null) {
      return []
    }
    try {
      const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=2cbkl`)
      console.log(response)
      if (!response.ok) {
        throw new Error("Сервер не отвечает")
      }
      if (response.status === 500) {
        throw new Error("Ошибка сервера 500")
      }
      if (response.status === 404) {
        throw new Error("Ошибка сервера 404")
      }
      const data = await response.json()
      if (data.stop) {
        throw new Error("Все билеты загружены")
      }
      return data
    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.message)
    }
  }
)

export default fetchTicketsId
