import React, { useEffect, useState } from 'react'
import Child from './Child';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const [isShow, setIsShow] = useState(false)

  useEffect(()=>{
    console.log("componentDidMount")
  },[])

  useEffect(()=>{
    console.log("componentDidUpdate 1")
  })

  useEffect(()=>{
    console.log("componentDidUpdate Color")
  }, [color])

  const increment = () => {
    setCount(prevState => prevState + 1);
  }

  const handleRemoveChild = () => {
    setIsShow(prevState => !prevState);
  }

  // console.log("Component update");

  return (
    <div>
        <button onClick={increment} >Increment</button>
        <button onClick={() => setColor(color === "red" ? "green" : "red")} >Change Color</button>


        <button onClick={handleRemoveChild}>Remove</button>

        <h2 style={{color}}>{count}</h2>


        {
          isShow && <Child />
        }
    </div>
  )
}

export default App