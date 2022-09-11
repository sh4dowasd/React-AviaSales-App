import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Spin } from "antd"

import Filter from "../filter/filter"
import fetchTicketsId, { fetchSomeTickets } from "../../api"
import { AppDispatch } from "../../store/store"
import { cheap } from "../../store/reducers/tabsReducer/action"
import { changeCheapFilter } from "../../store/reducers/tickets/ticketsReducer"
import { ITicketList, ITicketId } from "../models"
import "./app.scss"
import SectionTickets from "../tickets/TicketSection"

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const idSearch = useSelector((state: ITicketId) => state.TicketId.id)

  const onSubmit = useCallback(() => {
    dispatch(fetchTicketsId())
  }, [])

  const getTickets = async () => {
    if (idSearch) {
      await dispatch(fetchSomeTickets(idSearch))
    }
    dispatch(cheap())
    dispatch(changeCheapFilter())
  }

  useEffect(() => {
    onSubmit()
  }, [])

  useEffect(() => {
    getTickets()
  }, [idSearch])

  const pending = useSelector((state: ITicketList) => state.Tickets.status)
  const isReady =
    pending === "pending" ? (
      <div style={{ textAlign: "center" }}>
        <Spin size="large" />
      </div>
    ) : (
      <SectionTickets />
    )
  return (
    <div className="container">
      <span className="logo">
        <span className="logo-img" />
      </span>
      <span className="aviasales">
        <section className="filter-container">
          <Filter />
        </section>
        {isReady}
      </span>
    </div>
  )
}

export default App
