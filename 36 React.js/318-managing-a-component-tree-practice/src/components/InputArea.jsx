import { useState } from "react";
import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const { handleAddItem } = props;

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          handleAddItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
