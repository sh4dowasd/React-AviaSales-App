import { Button } from "antd"
import React from "react"
import { useSelector } from "react-redux"

import { ITicketList } from "../../models"
import Ticket from "../ticket/ticket"
import "./tickets.scss"

const TicketList = (props: { manyTickets: number }) => {
  const arrayTickets = useSelector((state: ITicketList) => state.Tickets.visibleTickets)

  const elems =
    arrayTickets.length > 0 ? (
      arrayTickets.slice(0, props.manyTickets).map((elem) => {
        return (
          <div className="tickets" key={elem.carrier}>
            <Ticket ticket={elem} />
          </div>
        )
      })
    ) : (
      <React.Fragment>
        <Button type="primary" block>
          Билетов не найдено
        </Button>
        <Button type="primary" block>
          Оптимальный - нет ни одной и пересадки и мин.цена
        </Button>
      </React.Fragment>
    )
  return <div className="list-grids">{elems}</div>
}

export default TicketList
