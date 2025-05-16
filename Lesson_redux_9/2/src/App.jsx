import React, { useState } from 'react'
import { dispatch } from './main';

const App = () => {
  const [value, setValue] = useState(0);

  const handleChangeValue = (e) => {
    setValue(+e.target.value)
  }

  const handleClickDeposit = () => {
    dispatch({type: "DEPOSIT", payload: value});
  }

  return (
    <>
      <input type="text" onChange={handleChangeValue}/> 
      <button onClick={handleClickDeposit}>Deposit</button>
    </>
  )
}

export default App