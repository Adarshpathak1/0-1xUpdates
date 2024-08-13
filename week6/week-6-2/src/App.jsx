import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1)
  let count = 0;
  for (let i = 0; i < input; i++) {
    count = count + i;
    
  }
  return (
    <div>
      <input onClick={(e) => {
        setInput(e.target.value);
      }}  placeholder="Enter the Number!" /> <br />
      sum from 1 to {input} is {count}

      <button onClick={() => {
        setCounter(counter+1)
      }}>Counter({ counter})</button>
    </div>
  )
}

export default App;