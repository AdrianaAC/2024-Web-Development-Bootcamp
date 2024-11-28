import React from "react";
import { createRoot } from "react-dom/client";
import { add, multiply, subtract, divide } from "./math";

const root = createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>
);
