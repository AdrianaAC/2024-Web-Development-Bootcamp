import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const name = "Consuela";
const sentence = "I hate cleaning";
const hates = "cleaning";
const number = 13;
root.render(
  <div>
    <h1>Hello {`${name} who hates ${hates}`}</h1> {/* template literal, ES6 */}
    <p>I am {name + " and " + sentence}</p>
    <p>{sentence + " " } {sentence}</p>
    <p>My lucky number is {number + 1}</p>
    <p>Random number {Math.floor(Math.random() * 11)}</p>
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
