import { Button, Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import fetchTicketsId, { fetchSomeTickets } from "../../../api"
import { cheap } from "../../../store/reducers/tabsReducer/tabsReducer"
import { changeCheapFilter } from "../../../store/reducers/tickets/ticketsReducer"
import { ITicketId, ITicketList } from "../../models"
import Ticket from "../ticket/ticket"
import "./tickets.scss"

const TicketList = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const [manyTickets, changeManyTickets] = useState(0)
  let max = 0
  const idSearch = useSelector((state: ITicketId) => state.idReducer.id)
  const arrayTickets = useSelector((state: ITicketList) => state.ticketsReducer.visibleTickets)
  const antIcon = <LoadingOutlined style={{ fontSize: 40, color: "blue" }} spin />

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
    setLoading(!loading)
    console.log(loading)
  }, [arrayTickets])

  useEffect(() => {
    getTickets()
  }, [idSearch])

  return (
    <div className="tickets">
      <div className="loading">{loading && <Spin indicator={antIcon} />}</div>
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
