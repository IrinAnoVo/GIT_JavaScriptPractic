import { useState } from "react"
import TodoList from "./components/TodoList/todoList";
import Footer from "./components/Footer/footer";
import Actions from "./components/Actions/actions";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // active

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      label: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setInputValue("");
  }

  const handleEnterTask = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      handleAddTask();
    }
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    setTasks(updatedTasks);
  }

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
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

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter(task => !task.completed);

    setTasks(updatedTasks);
  }

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo App</h1>

      <div className="todo-app__content">
        <Actions
          inputValue={inputValue}
          inputChange={handleInputChange}
          addTask={handleAddTask}
          enterTask={handleEnterTask}
        />

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

