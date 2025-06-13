import FilterItem from "./filterItem";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

const Filters = ({activeLabel}) => {
    

  return (
    <div className="todo-app__footer-filters">
      <ul>
        {filterOptions && filterOptions.map(option => (
          <FilterItem
            activeLabel={activeLabel}
            key={option.value}
            option={option}            
          />
        ))}
      </ul>
    </div>
  )
}
 
export default Filters; 