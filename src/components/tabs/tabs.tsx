import "./tabs.scss"
import { useEffect } from "react"
import { Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import cn from "classnames"

import { ITransfer, ITabs } from "../models"
import {
  changeCheapFilter,
  changeFastFilter,
  changeOptimalFilter,
  changeTransferFilter,
} from "../../store/reducers/tickets/ticketsReducer"
import { cheap, fast, optimal } from "../../store/reducers/tabsReducer/tabsReducer"
import { AppDispatch } from "../../store/store"

const Tabs = () => {
  const transFilter = useSelector((state: ITransfer) => state.filtersReducer.checkFilter)
  const dispatch = useDispatch<AppDispatch>()
  const tabsFilter = useSelector((state: ITabs) => state.tabsReducer.tabsFilter)
  useEffect(() => {
    dispatch(changeTransferFilter(transFilter))
  }, [tabsFilter])
  return (
    <div className="tabs">
      <span className="buttons-container">
        <Button
          className={cn({ blue_but: tabsFilter === "cheapest" }, "left")}
          onClick={() => {
            dispatch(cheap())
            dispatch(changeCheapFilter())
          }}
        >
          Самый дешевый
        </Button>
        <Button
          className={cn({ blue_but: tabsFilter === "fastest" }, "center")}
          onClick={() => {
            dispatch(fast())
            dispatch(changeFastFilter())
          }}
        >
          Самый быстрый
        </Button>
        <Button
          className={cn({ blue_but: tabsFilter === "optimal" }, "right")}
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
