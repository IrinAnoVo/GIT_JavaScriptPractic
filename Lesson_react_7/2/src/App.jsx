import React from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevState => prevState + 1)
  }

  const handleDecrement = () => {
    setCount(prevState => prevState - 1)
  }

  return (
    <>
      <Actions 
        increment={handleIncrement} 
        decrement={handleDecrement}
      />

      <ContextValue.Provider value={{count, handleIncrement}}>
          <Child/>
      </ContextValue.Provider>
    </>
  )
}

export default App