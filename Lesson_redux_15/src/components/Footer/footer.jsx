import Filters from "../Filters/filters"

const Footer = ({tasks, activeLabel, changeFilter, clearCompleted}) => {
    const taskLeft = tasks.filter(task => !task.completed).length;

  return (
    <div className="todo-app__footer">
              <div className="todo-app__footer-info">
                <span>{taskLeft} item{taskLeft !== 1 ? "s" : ""} left!</span>
              </div>

              <Filters 
              activeLabel={activeLabel} 
              changeFilter={changeFilter} 
              />
              
              <div className="todo-app__footer-actions">
                <button className="todo-app__clear-completed" onClick={clearCompleted}>Clear completed</button>
              </div>
            </div>
  )
}

export default Footer;