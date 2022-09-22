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

  const Input = (id: string, action: () => { payload: undefined; type: string }, filtId: number, text: string) => {
    return (
      <span>
        <input
          className="my-checkbox"
          id={id}
          type="checkbox"
          onChange={() => dispatch(action())}
          checked={transFilter[filtId]}
        />
        <label htmlFor={id}>{text}</label>
      </span>
    )
  }
  const rendInputs = [
    {
      input: Input("id1", All, 0, "Все"),
    },
    {
      input: Input("id2", Zero, 1, "Без пересадок"),
    },
    {
      input: Input("id3", One, 2, "1 пересадка"),
    },
    {
      input: Input("id4", Two, 3, "2 пересадки"),
    },
    {
      input: Input("id5", Three, 4, "3 пересадки"),
    },
  ]

  return (
    <div className="filter">
      <h1>Количество пересадок</h1>
      {rendInputs.map((el) => el.input)}
    </div>
  )
}

export default Filter
