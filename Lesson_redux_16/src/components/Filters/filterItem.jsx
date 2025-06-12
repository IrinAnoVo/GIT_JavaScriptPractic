const FilterItem = ({ option, activeLabel, changeFilter }) => {

  return (
    <li
        key={option.value}
        className={activeLabel === option.value ? "active" : ""}
        onClick={() => changeFilter(option.value)}
        >
        {option.label}
    </li>
    )
}

export default FilterItem;
