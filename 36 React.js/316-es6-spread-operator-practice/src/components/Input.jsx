import React from "react";

export default function Input({ input, setInput }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="What to do"
        onChange={handleChange}
      />
    </div>
  );
}
