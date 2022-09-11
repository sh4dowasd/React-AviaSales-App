import { useEffect } from "react"
import "./tabs.scss"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "antd"
import cn from "classnames"

import { ITabs, ITransfer } from "../models"
import { cheap, fast, optimal } from "../../store/reducers/tabsReducer/action"
import {
  changeCheapFilter,
  changeFastFilter,
  changeOptimalFilter,
  changeTransferFilter,
} from "../../store/reducers/tickets/ticketsReducer"
import { AppDispatch } from "../../store/store"
const Tabs = () => {
  const transFilter = useSelector((state: ITransfer) => state.transferFilter.checkFilter)
  const dispatch = useDispatch<AppDispatch>()
  const tabsFilter = useSelector((state: ITabs) => state.tabsFilter.nameTabsFilter)

  useEffect(() => {
    dispatch(changeTransferFilter(transFilter))
  }, [tabsFilter])

  return (
    <div className="tabs">
      <span className="buttons-container">
        <Button
          className={cn({ blue_but: tabsFilter === "cheapest" })}
          onClick={() => {
            dispatch(cheap())
            dispatch(changeCheapFilter())
          }}
        >
          Самый дешевый
        </Button>
        <Button
          className={cn({ blue_but: tabsFilter === "fastest" })}
          onClick={() => {
            dispatch(fast())
            dispatch(changeFastFilter())
          }}
        >
          Самый быстрый
        </Button>
        <Button
          className={cn({ blue_but: tabsFilter === "optimal" })}
          onClick={() => {
            dispatch(optimal())
            dispatch(changeOptimalFilter())
          }}
        >
          Оптимальный
        </Button>
      </span>
    </div>
  )
}

export default Tabs
