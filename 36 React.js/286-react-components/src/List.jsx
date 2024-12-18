import React from "react";

function List() {
  let ingredientsList = ["Bacon", "Jamon", "Noodles", "Pasta", "Rice"];
  let ingredientItem = ingredientsList.map((ingredient) => {
    return <li>{ingredient}</li>;
  });
  console.log(ingredientsList);
  console.log(ingredientItem);
  return <ul>{ingredientItem}</ul>;
}

export default List;
