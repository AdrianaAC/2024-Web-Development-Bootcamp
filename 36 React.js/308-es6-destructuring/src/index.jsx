import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";

const root = createRoot(document.getElementById("root"));
const [honda, tesla] = cars;
console.log(honda);
console.log(tesla);

const [teslaTopSpeed, tesla060] = tesla.speedStats;
const [hondaTopSpeed, honda060] = honda.speedStats;
const [teslaTopColour, teslaSecondColour] = tesla.coloursByPopularity;
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
