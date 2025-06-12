import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/features/todos/todosSlice";

const Actions = () => {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

   const handleAddTask = () => {
    dispatch (addTodo(inputValue)); 

    setInputValue("");
  }

  const handleEnterTask = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      handleAddTask();
    }
  } 


  return (
    <div className="todo-app__input">
        <input 
          type="text" 
          value={inputValue} 
          placeholder="Add a new task..." 
          onChange={handleInputChange} 
          onKeyDown={handleEnterTask} 
        />
      <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default Actions;