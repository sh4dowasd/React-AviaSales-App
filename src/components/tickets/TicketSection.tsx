import { useState } from "react"

import Tabs from "../tabs/tabs"
import MoreTickets from "../more-tickets/more-tickets"

import TicketList from "./ticket-list/ticket-list"

const SectionTickets = () => {
  const [manyTickets, changeManyTickets] = useState(10)
  return (
    <section className="main">
      <Tabs />
      <TicketList manyTickets={manyTickets} />
      <MoreTickets changeManyTickets={changeManyTickets} manyTickets={manyTickets} />
    </section>
  )
}

export default SectionTickets
