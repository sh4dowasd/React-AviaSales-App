import "./filter.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { ITransfer, ITabs } from "../models"
import { All, Zero, One, Two, Three } from "../../store/reducers/filtersReducer/filersReducer"
import {
  changeCheapFilter,
  changeFastFilter,
  changeOptimalFilter,
  changeTransferFilter,
} from "../../store/reducers/tickets/ticketsReducer"

const Filter = () => {
  const transFilter = useSelector((state: ITransfer) => state.filtersReducer.checkFilter)
  const dispatch = useDispatch()
  const tabsFilter = useSelector((state: ITabs) => state.tabsReducer.tabsFilter)

  const disCombo = () => {
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
    disCombo()
  }, [transFilter])

  return (
    <div className="filter">
      <h1>Количество пересадок</h1>
      <span>
        <input
          className="my-checkbox"
          id="id1"
          type="checkbox"
          onChange={() => dispatch(All())}
          checked={transFilter[0]}
        />
        <label htmlFor="id1">Все</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id2"
          type="checkbox"
          onChange={() => dispatch(Zero())}
          checked={transFilter[1]}
        />
        <label htmlFor="id2">Без пересадок</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id3"
          type="checkbox"
          onChange={() => dispatch(One())}
          checked={transFilter[2]}
        />
        <label htmlFor="id3">1 пересадка</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id4"
          type="checkbox"
          onChange={() => dispatch(Two())}
          checked={transFilter[3]}
        />
        <label htmlFor="id4">2 пересадки</label>
      </span>
      <span>
        <input
          className="my-checkbox"
          id="id5"
          type="checkbox"
          onChange={() => dispatch(Three())}
          checked={transFilter[4]}
        />
        <label htmlFor="id5">3 пересадки</label>
      </span>
    </div>
  )
}

export default Filter
