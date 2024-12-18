import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <ul>
      <img
        className="foodImage"
        src="https://www.simplyrecipes.com/thmb/FJfLY4LK_-MmrB157FzmN_0Nu9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Microwave-Bacon-LEAD-2-f6b99ba91e134c7587a63abe0bb97384.jpg"
        alt=" 
    bacon"
      />
      <img
        className="foodImage"
        src="https://jamonypico.com/wp-content/uploads/2024/01/Como-Almacenar-y-Conservar-Jamon-Iberico-de-Forma-Correcta-1.png"
        alt="Jamon"
      />
      <img
        className="foodImage"
        src="https://www.allrecipes.com/thmb/6Vxi_KQCq14hlxUHcCQGUG5IgHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11991-egg-noodles-Step-07-1-83dd41363cee430ca3aff7b94454165e.jpg"
        alt="Noodles"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
