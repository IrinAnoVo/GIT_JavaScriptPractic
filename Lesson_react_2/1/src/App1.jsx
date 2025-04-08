import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0); // [1, () => {}]

  // let x = useState(0);
  // // console.log(x)
  // let value = x[0];
  // let setValue = x[1];
  
  // let value = 0;

  let increment = () => {
    setValue(value + 1);
    // console.log(value);
  }

  console.log("ReRender");
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>Counter</h1>
      <p>{value}</p>
    </div>
  )
}

export default App