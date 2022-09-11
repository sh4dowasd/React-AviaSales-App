import { ITicket } from "../../models"

import "./ticket.scss"
import { getTime, getTimeOfArrival, getTimeFromMins, getStops } from "./counting-functions"

interface IProps {
  ticket: ITicket
}

const Ticket = ({ ticket }: IProps) => {
  const d1 = new Date(ticket.segments[0].date)
  const d2 = new Date(ticket.segments[1].date)

  return (
    <div className="ticket">
      <div className="header">
        <p className="price">{ticket.price} P</p>
        <p className="carrier">
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} />
        </p>
      </div>
      <div className="segment">
        <div className="flight">
          <p className="origin">
            {ticket.segments[0].origin} - {ticket.segments[0].destination}
          </p>
          <p className="date">
            {getTime(d1)} - {getTimeOfArrival(ticket.segments[0].duration, d1)}
          </p>
        </div>
        <div className="duration-time">
          <p className="duration-title">В пути</p>
          <p className="duration">{getTimeFromMins(ticket.segments[0].duration)}</p>
        </div>
        <div className="transfers">
          <p className="transfers-title">{getStops(ticket.segments[0].stops.length)}</p>
          <p className="stops">{ticket.segments[0].stops}</p>
        </div>
      </div>
      <div className="segment">
        <div className="flight">
          <p className="origin">
            {ticket.segments[1].origin} - {ticket.segments[1].destination}
          </p>
          <p className="date">
            {getTime(d2)} - {getTimeOfArrival(ticket.segments[1].duration, d2)}
          </p>
        </div>
        <div className="duration-time">
          <p className="duration-title">В пути</p>
          <p className="duration">{getTimeFromMins(ticket.segments[1].duration)}</p>
        </div>
        <div className="transfers">
          <p className="transfers-title">{getStops(ticket.segments[1].stops.length)}</p>
          <p className="stops">{ticket.segments[1].stops}</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
