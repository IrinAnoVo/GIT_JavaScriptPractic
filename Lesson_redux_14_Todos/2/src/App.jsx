import { useState } from "react"

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo App</h1>
    
      <div className="todo-app__content">
          <div className="todo-app__input">
            <input type="text" value={inputValue} placeholder="Add a new task..." onChange={handleInputChange}/>
            <button onClick={handleAddTask}>Add</button>
          </div>
          
          <ul className="todo-app__list">
            {
              tasks && tasks.map(task => (
                <li className="todo-app__item" key={task.id}>
                  <div className="todo-app__item-content">
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)}/>
                    <span className={task.completed ? "todo-app__item-completed" : ""}>{task.label}</span>
                  </div>
                  <div className="todo-app__item-actions">
                    {/* <button className="todo-app__item-edit">Edit</button> */}
                    <button className="todo-app__item-delete" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                  </div>
                </li>
              ))
            }
           
          </ul>
      
      </div>
    </div>
  )
}

export default App
