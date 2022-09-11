import { configureStore, combineReducers } from "@reduxjs/toolkit"

import filtersReducer from "./reducers/filtersReducer/filersReducer"
import tabsReducer from "./reducers/tabsReducer/tabsReducer"
import ticketsReducer from "./reducers/tickets/ticketsReducer"

const rootReducer = combineReducers({
  filtersReducer,
  tabsReducer,
  ticketsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export default store
