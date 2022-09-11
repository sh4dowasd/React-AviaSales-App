import { Button } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import fetchTicketsId, { fetchSomeTickets } from "../../../api"
import { cheap } from "../../../store/reducers/tabsReducer/tabsReducer"
import { changeCheapFilter } from "../../../store/reducers/tickets/ticketsReducer"
import { ITicketId, ITicketList } from "../../models"
import Ticket from "../ticket/ticket"
import "./tickets.scss"

const TicketList = () => {
  const dispatch = useDispatch()
  const [manyTickets, changeManyTickets] = useState(0)
  let max = 0
  const idSearch = useSelector((state: ITicketId) => state.idReducer.id)
  const arrayTickets = useSelector((state: ITicketList) => state.ticketsReducer.visibleTickets)

  const getTickets = async () => {
    if (idSearch) {
      await dispatch(fetchSomeTickets(idSearch))
    }
    dispatch(cheap())
    dispatch(changeCheapFilter())
  }

  useEffect(() => {
    dispatch(fetchTicketsId())
  }, [])

  useEffect(() => {
    getTickets()
  }, [idSearch])

  return (
    <div className="tickets">
      {arrayTickets.slice(manyTickets, manyTickets + 5).map((ticket) => (
        <div className="ticket" key={max++}>
          <Ticket ticket={ticket} />
        </div>
      ))}
      <Button className="view-tickets" type="primary" onClick={() => changeManyTickets(manyTickets + 5)}>
        Показать еще 5 билетов!
      </Button>
    </div>
  )
}

export default TicketList
