import React from "react";
import { createRoot } from "react-dom/client";
import Title from "./Heading";
import List from "./List";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Title />
    <List />
  </div>
);
