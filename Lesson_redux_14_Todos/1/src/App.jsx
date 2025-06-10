import { useState } from "react"

const App = () => {
  const [inputValue, setInputValue] = useState(""); // ""
  const [tasks, setTasks] = useState([]); // []

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddTask = () => {
    // console.log("New task added:", inputValue); // hello world

    const newTask = {
      id: Date.now(), // 12545488787878
      label: inputValue, // hello world
      completed: false, // false
    };

    setTasks([...tasks, newTask]);

    setInputValue("");
  }

  console.log("Tasks:", tasks);

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo App</h1>
    
      <div className="todo-app__content">
          <div className="todo-app__input">
            <input type="text" value={inputValue} placeholder="Add a new task..." onChange={handleInputChange}/>
            <button onClick={handleAddTask}>Add</button>
          </div>
          
          <ul className="todo-app__list">
            <li className="todo-app__item">
              <div className="todo-app__item-content">
                <input type="checkbox" />
                <span>Sample Task</span>
              </div>
              <div className="todo-app__item-actions">
                {/* <button className="todo-app__item-edit">Edit</button> */}
                <button className="todo-app__item-delete">Delete</button>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default App