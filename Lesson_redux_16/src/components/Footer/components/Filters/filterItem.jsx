import { useDispatch } from "react-redux";
import { changeFilter} from "../../../../store/features/todos/todosSlice";

const FilterItem = ({ option, activeLabel}) => {
  const dispatch = useDispatch();

  const handleChangeFilter = (value) => {
    dispatch(changeFilter(value));
  }



  return (
    <li
        key={option.value}
        className={activeLabel === option.value ? "active" : ""}
        onClick={() => handleChangeFilter(option.value)}
        >
        {option.label}
    </li>
    )
}

export default FilterItem;
