import React from "react";
import { createRoot } from "react-dom/client";
const MYNAME = "Consuela";
const CURRENTYEAR = new Date().getFullYear();
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>Created by {MYNAME}.</p>
    <p>Copyright {CURRENTYEAR}.</p>
  </div>
);
