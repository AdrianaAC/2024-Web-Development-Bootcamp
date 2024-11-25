import React from "react";
import { createRoot } from "react-dom/client";

let timeOfDay = new Date().getHours();
let greeting;
let customStyle;

if (timeOfDay > 0 && timeOfDay <= 12) {
  greeting = "morning";
} else if (timeOfDay > 12 && timeOfDay <= 18) {
  greeting = "afternoon";
} else if (timeOfDay > 18 && timeOfDay <= 24) {
  greeting = "evening";
}

if (greeting === "morning") {
  customStyle = {
    color: "red",
  };
} else if (greeting === "afternoon") {
  customStyle = {
    color: "green",
  };
} else if (greeting === "evening") {
  customStyle = {
    color: "blue",
  };
}

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" style={customStyle}>Good {greeting}!</h1>
  </div>
);
