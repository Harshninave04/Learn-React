import "./App.css";
import { useState } from "react";

// Here we learn the concept of hook {useState}

/*
  How do we use useState ? 

  const [state, setState] = useState(initialState);

  where,
  state: The current state value,
  setState: A function to update the state
  
*/

function App() {
  let [counter, setCounter] = useState(1);
  // To increase the value by 1
  const addValue = () => {
    // console.log("counter", counter);
    setCounter(counter + 1);
  };

  // To decrease the value by 1
  const remValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h3> Hello counter Project</h3>
      <h1>Counter Value : {counter}</h1>

      <button onClick={addValue}>Increment</button>
      <button onClick={remValue}>Decrement</button>
    </>
  );
}

export default App;
