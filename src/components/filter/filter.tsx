import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import "./filter.scss"
import { ITabs, ITransfer } from "../models"
import { All, Zero, One, Two, Three } from "../../store/reducers/filtersReducer/action"
import {
  changeCheapFilter,
  changeFastFilter,
  changeOptimalFilter,
  changeTransferFilter,
} from "../../store/reducers/tickets/ticketsReducer"

const Filter = () => {
  const transFilter = useSelector((state: ITransfer) => state.transferFilter.checkFilter)
  const dispatch = useDispatch()
  const tabsFilter = useSelector((state: ITabs) => state.tabsFilter.nameTabsFilter)
  const filtersCombo = () => {
    switch (tabsFilter) {
      case "cheapest":
        dispatch(changeCheapFilter())
        dispatch(changeTransferFilter(transFilter))
        break
      case "fastest":
        dispatch(changeFastFilter())
        dispatch(changeTransferFilter(transFilter))
        break
      case "optimal":
        dispatch(changeOptimalFilter())
        dispatch(changeTransferFilter(transFilter))
        break
      default:
        dispatch(changeOptimalFilter())
        dispatch(changeTransferFilter(transFilter))
    }
  }

  useEffect(() => {
    dispatch(changeTransferFilter(transFilter))
    filtersCombo()
  }, [transFilter])

  return (
    <div className="filter">
      <h1>Количество пересадок</h1>
      <span>
        <input
          className="my-checkbox"
          id="id1"
          type="checkbox"
          checked={transFilter[0]}
          onChange={() => {
            dispatch(All())
          }}
        />
        <label htmlFor="id1">Все</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id2"
          type="checkbox"
          checked={transFilter[1]}
          onChange={() => {
            dispatch(Zero())
          }}
        />
        <label htmlFor="id2">Без пересадок</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id3"
          type="checkbox"
          checked={transFilter[2]}
          onChange={() => {
            dispatch(One())
          }}
        />
        <label htmlFor="id3">1 пересадка</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id4"
          type="checkbox"
          checked={transFilter[3]}
          onChange={() => {
            dispatch(Two())
          }}
        />
        <label htmlFor="id4">2 пересадки</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id5"
          type="checkbox"
          checked={transFilter[4]}
          onChange={() => {
            dispatch(Three())
          }}
        />
        <label htmlFor="id5">3 пересадки</label>
      </span>
    </div>
  )
}

export default Filter
