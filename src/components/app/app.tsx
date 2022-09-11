import Filter from "../filter/filter"
import Tabs from "../tabs/tabs"
import TicketList from "../tickets/ticket-list/ticket-list"

import "./app.scss"

function App() {
  return (
    <div className="container">
      <span className="logo">
        <span className="logo-img" />
      </span>
      <span className="aviasales">
        <section className="filter-container">
          <Filter />
        </section>
        <section className="main">
          <Tabs />
          <TicketList />
        </section>
      </span>
    </div>
  )
}

export default App
