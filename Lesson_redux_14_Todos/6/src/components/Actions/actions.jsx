const Actions = ({inputValue, inputChange, addTask, enterTask}) => {

  return (
    <div className="todo-app__input">
          <input type="text" value={inputValue} 
          placeholder="Add a new task..." 
          onChange={inputChange} 
          onKeyDown={enterTask} />
          <button onClick={addTask}>Add</button>
        </div>
  )
}

export default Actions;