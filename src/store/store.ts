import { configureStore, combineReducers } from "@reduxjs/toolkit"

import filtersReducer from "./reducers/filtersReducer/filersReducer"
import tabsReducer from "./reducers/tabsReducer/tabsReducer"
import ticketsReducer from "./reducers/tickets/ticketsReducer"
import idReducer from "./reducers/tickets/idReducer"

const rootReducer = combineReducers({
  filtersReducer,
  tabsReducer,
  ticketsReducer,
  idReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export default store
