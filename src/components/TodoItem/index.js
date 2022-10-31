import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteTodo} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-list">
      <p className="list-item">{title}</p>
      <button onClick={onDelete} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
