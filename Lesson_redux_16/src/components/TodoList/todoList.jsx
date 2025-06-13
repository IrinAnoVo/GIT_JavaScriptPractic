import TodoItem from "./todoItem"

const TodoList = ({data, toggleTask, deleteTask}) => {
  return (
    <ul className="todo-app__list">
        {
            data && data.map(todo => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                />
            ))
        }
    </ul>
  )
}

export default TodoList;
