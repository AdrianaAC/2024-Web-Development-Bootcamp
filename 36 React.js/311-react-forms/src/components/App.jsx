import { useState } from "react";
import React from "react";

function App() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("Hello");


  function handleSubmit() {
    setTitle("Hello " + input);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <input type="text" placeholder="What's your name?" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
