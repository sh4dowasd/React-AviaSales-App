import { ITicket } from "../../models"

import "./ticket.scss"
import { getTime, getTimeOfArrival, getTimeFromMins, getStops } from "./counting-functions"

interface IProps {
  ticket: ITicket
}

const Ticket = ({ ticket }: IProps) => {
  const d1 = new Date(ticket.segments[0].date)
  const d2 = new Date(ticket.segments[1].date)

  const Segment = (id: number, date: Date) => {
    return (
      <div className="segment">
        <div className="flight">
          <p className="origin">
            {ticket.segments[id].origin} - {ticket.segments[id].destination}
          </p>
          <p className="date">
            {getTime(date)} - {getTimeOfArrival(ticket.segments[id].duration, date)}
          </p>
        </div>
        <div className="duration-time">
          <p className="duration-title">В пути</p>
          <p className="duration">{getTimeFromMins(ticket.segments[id].duration)}</p>
        </div>
        <div className="transfers">
          <p className="transfers-title">{getStops(ticket.segments[id].stops.length)}</p>
          <p className="stops">{ticket.segments[id].stops}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="header">
        <p className="price">{ticket.price} P</p>
        <p className="carrier">
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} />
        </p>
      </div>
      {Segment(0, d1)}
      {Segment(1, d2)}
    </>
  )
}

export default Ticket
