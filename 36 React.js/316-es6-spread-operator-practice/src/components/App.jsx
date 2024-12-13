import { useState } from "react";
import React from "react";
import ToDoItem from "./ToDoItem";
import Input from "./Input";

function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleAdd() {
    setToDoList((prevList) => [...prevList, input]);
    setInput("");
  }

  const renderingList = toDoList.map((item, index) => {
   return <ToDoItem item={item} key={index} />;
  });

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Input input={input} setInput={setInput} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{renderingList}</ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
