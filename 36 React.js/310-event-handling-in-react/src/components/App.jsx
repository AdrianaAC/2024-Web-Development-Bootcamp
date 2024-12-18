import { useState } from "react";
import React from "react";

function App() {
  const [title, setTitle] = useState("Hello");
  const [input, setInput] = useState("");
  const [hover, setHover] = useState(false);

  function handleSubmit() {
    setTitle(`Hello, ${input}`);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleHover(event) {
    // event.target.style.backgroundColor = "black";
    setHover(true);
  }

  function handleOut(event) {
    // event.target.style.backgroundColor = "white";
    setHover(false);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleInput}
      />
      <button
        onClick={handleSubmit}
        onMouseOut={handleOut}
        onMouseOver={handleHover}
        style={{ backgroundColor: hover ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
