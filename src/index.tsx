import * as ReactDOMClient from "react-dom/client"
import { Provider } from "react-redux"
import "./index.scss"

import store from "./store/store"
import App from "./components/app/app"

const root = ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
