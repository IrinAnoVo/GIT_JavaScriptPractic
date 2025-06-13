import TodoList from "./components/TodoList/todoList";
import Footer from "./components/Footer/footer";
import Actions from "./components/Actions/actions";
import { useSelector } from "react-redux";

const App = () => {
  const { todos, filter } = useSelector((state) => state.todos);

  const filteredTasks = todos.filter(task => {
    if (filter === "active") {
      return !task.completed; 
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo App</h1>

      <div className="todo-app__content">
        
        <Actions/>

        <TodoList data={filteredTasks}          
          /> 

        {
          todos.length > 0 && (
            <Footer
              tasks={todos}
              activeLabel={filter}
            />
          )
        }   
      </div>
    </div>
  )
} 

export default App

