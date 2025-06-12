const TodoItem = ({todo, toggleTask, deleteTask}) => {
  return (
    <li className="todo-app__item" key={todo.id}>
        <div className="todo-app__item-content">
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTask(todo.id)} />
            <span className={todo.completed ? "todo-app__item-completed" : ""}>{todo.label}</span>
        </div>
        <div className="todo-app__item-actions">
            {/* <button className="todo-app__item-edit">Edit</button> */}
            <button className="todo-app__item-delete" onClick={() => deleteTask(todo.id)}>Delete</button>
        </div>
    </li>
  )
}   

export default TodoItem;