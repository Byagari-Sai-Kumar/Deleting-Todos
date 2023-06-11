import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem/index'

// eslint-disable-next-line
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  // eslint-disable-next-line
  state = {todoItems: initialTodosList}

  onDeleteTodo = uniqueId => {
    console.log(uniqueId)
    const {todoItems} = this.state
    const filteredTodoItems = todoItems.filter(
      eachItem => eachItem.id !== uniqueId,
    )
    this.setState({todoItems: filteredTodoItems})
  }

  render() {
    const {todoItems} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todosContainer">
            {todoItems.map(eachItem => (
              <TodoItem
                todoItems={eachItem}
                onDeleteTodo={this.onDeleteTodo}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
}

export default SimpleTodos
