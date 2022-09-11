import { Button } from "antd"

const MoreTickets = (props: { changeManyTickets: (id: number) => void; manyTickets: number }) => {
  return (
    <div className="add-5tickets">
      <Button className="view-tickets" type="primary" onClick={() => props.changeManyTickets(props.manyTickets + 5)}>
        Показать еще 5 билетов!
      </Button>
    </div>
  )
}

export default MoreTickets
