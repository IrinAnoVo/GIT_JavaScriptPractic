import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/actions/account';

const App = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const balance = useSelector(state => state.balance);

  const handleChangeValue = (e) => {
    setValue(+e.target.value)
  }

  const handleClickDeposit = () => {   //внести деньги
    dispatch(deposit(value));
  }

  const handleClickWithdraw = () => {   //вывести деньги
    dispatch(withdraw(value));
  }

  return (
    <>
      <input type="text" onChange={handleChangeValue}/> 
      <button onClick={handleClickDeposit}>Deposit</button>
      <button onClick={handleClickWithdraw}>Withdraw</button>

      <h2>{balance}</h2>
    </>
  )
}

export default App;