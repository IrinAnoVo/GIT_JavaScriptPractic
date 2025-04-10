import React from 'react'
import Child from './components/Child/Child'
import Context from './Context'

const App = () => {
  return (
    <Context.Provider value={{ title: "Hello world !!!", products: ["apple", "banana", "orange"] }}>
        <Child/>
        {/* <Products /> */}
    </Context.Provider>
  )
}

export default App