
import React from "react";

export default function ToDoItem(props) {
  return (
    <div>
      <li onClick={() => {
        props.onCheck(props.id);
      }}>
        {props.text}
      </li>
    </div>
  );
} 
