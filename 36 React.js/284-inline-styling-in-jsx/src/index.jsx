import React from "react";
import { createRoot } from "react-dom/client";

const customStyle = {
  color: "red",
};
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <h1 style={{ color: "green" }}>Hello World!</h1>
  </div>
);
