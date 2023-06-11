// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItems, onDeleteTodo, key} = props
  const {id, title} = todoItems

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <l1 className="eachTodoContainer">
      <p className="todoItem">{title}</p>
      <button type="button" className="deleteButton" onClick={deleteTodo}>
        Delete
      </button>
    </l1>
  )
}

export default TodoItem
