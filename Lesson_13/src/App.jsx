import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const App = () => {
  const [dropdown, setDropdown] = useState(false)
  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <div>
        <div className="dropdown">
            <div className="dropdown__button" onClick={handleDropdown}>
              <span>Dropdown</span>
              <IoIosArrowDown className={`dropdown-arrow ${dropdown ? "dropdown-arrow__active" : ""}`} />
              </div>
            {
               dropdown ? (
                <ul className="dropdown-content">              
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
          ) : null
        }
        </div>
    </div>
  )
}
export default App;