import { useCallback, useMemo, useState } from "react"
import Card from "./component/Card";
import Button from "./component/Button";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("green");

  const increment =() => {
    setCount(count + 1);
  }

  const handleChangeName =() => {
    setName(name === "green" ? "red" : "green");
  }

  const result = useMemo(() => {
    console.log("Calculating ...");

    let result = 0;

    for (let i = 0; i < 1000000000; i++) {
      result += 0;
    }

    return result + count;
  }, [count])

  const handleClick = useCallback(() => {
    console.log("Clicked")
  }, [])

  // const result = calculation(count);

  return (
    <div>
      <button onClick={increment}>Increment {count}</button>
      <button onClick={handleChangeName}>Change Name</button>
      <Button onClick={handleClick} />
      <h2>Result: {result}</h2>

      <Card name={name} />
    </div>
  )
}

export default App