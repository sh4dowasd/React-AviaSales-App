export interface ITicket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}

export interface IIniat {
  someTickets: Array<ITicket>
  someFilterTickets: Array<ITicket>
  visibleTickets: Array<ITicket>
  status: undefined | string | unknown
  error: null | string | unknown
}

export interface ITicketList {
  ticketsReducer: {
    someTickets: Array<ITicket>
    someFilterTickets: Array<ITicket>
    visibleTickets: Array<ITicket>
    status?: "ready" | "pending"
    error?: null | string
  }
}

export interface ITicketId {
  idReducer: I1
}

export interface ITransfer {
  filtersReducer: {
    checkFilter: Array<boolean>
  }
}

export interface ITabs {
  tabsReducer: {
    tabsFilter: "cheapest" | "fastest" | "optimal"
  }
}

export interface I1 {
  id: string
}
