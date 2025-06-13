import { useDispatch } from "react-redux";
import Filters from "./components/Filters/filters"
import { clearCompleted } from "../../store/features/todos/todosSlice";

const Footer = ({tasks, activeLabel}) => {
    const dispatch = useDispatch();

    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    }

    const taskLeft = tasks.filter(task => !task.completed).length;

  return (
    <div className="todo-app__footer">
              <div className="todo-app__footer-info">
                <span>{taskLeft} item{taskLeft !== 1 ? "s" : ""} left!</span>
              </div>

              <Filters 
              activeLabel={activeLabel}  
              />
              
              <div className="todo-app__footer-actions">
                <button className="todo-app__clear-completed" onClick={handleClearCompleted}>Clear completed</button>
              </div>
            </div>
  )
}

export default Footer;