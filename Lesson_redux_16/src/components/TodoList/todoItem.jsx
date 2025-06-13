import { useDispatch } from "react-redux";

const TodoItem = ({todo}) => {

const dispatch = useDispatch()

const handleDeleteTask = (taskId) => {
  dispatch(deleteTask(taskId))
}

const handleToggleTask = (taskId) => {
  dispatch(toggleTask(taskId))
}

  return (
    <li className="todo-app__item" key={todo.id}>
        <div className="todo-app__item-content">
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTask(todo.id)} />
            <span className={todo.completed ? "todo-app__item-completed" : ""}>{todo.label}</span>
        </div>
        <div className="todo-app__item-actions">
            {/* <button className="todo-app__item-edit">Edit</button> */}
            <button className="todo-app__item-delete" onClick={() => handleDeleteTask(todo.id)}>Delete</button>
        </div>
    </li>
  )
}   

export default TodoItem;