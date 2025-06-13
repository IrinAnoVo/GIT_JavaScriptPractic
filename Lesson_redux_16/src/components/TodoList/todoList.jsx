import TodoItem from "./todoItem"

const TodoList = ({data}) => {
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
