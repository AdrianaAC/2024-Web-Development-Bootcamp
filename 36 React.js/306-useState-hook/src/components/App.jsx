import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function inputHandler(e) {
    setInput(parseInt(e.target.value, 10));
  }

  function addInput() {
    setCount(count + input);
  }

  function subtractInput() {
    setCount(count - input);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <input type="number" onChange={inputHandler} />
      <button onClick={addInput}>+</button>
      <button onClick={subtractInput}>-</button>
    </div>
  );
}

export default App;
