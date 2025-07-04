import { useState } from "react"
import TodoList from "./components/TodoList/todoList";
import Footer from "./components/Footer/footer";
import Actions from "./components/Actions/actions";
import { useSelector } from "react-redux";

const App = () => {
  const {todos} = useSelector((state) => state.todos);

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // active

  const handleDeleteTask = (taskId) => {
    const updatedTasks = todos.filter(task => task.id !== taskId);

    setTasks(updatedTasks);
  }

  const handleToggleTask = (taskId) => {
    const updatedTasks = todos.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task; 
    });

    setTasks(updatedTasks);
  }

  const handleChangeFilter = (newFilter) => { // all
    setFilter(newFilter);
  }

  const filteredTasks = todos.filter(task => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  const handleClearCompleted = () => {
    const updatedTasks = todos.filter(task => !task.completed);

    setTasks(updatedTasks);
  }

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo App</h1>

      <div className="todo-app__content">
        
        <Actions/>

        <TodoList data={filteredTasks}
          toggleTask={handleToggleTask}
          deleteTask={handleDeleteTask} 
          /> 

        {
          tasks.length > 0 && (
            <Footer
              tasks={tasks}
              activeLabel={filter}
              changeFilter={handleChangeFilter}
              clearCompleted={handleClearCompleted}
            />
          )
        }   
      </div>
    </div>
  )
} 

export default App

