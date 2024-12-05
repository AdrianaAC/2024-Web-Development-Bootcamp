import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(nbr) {
  return nbr * 2;
}
let doubledNumbers = numbers.map(double);
console.log("Doubling with Map: ", doubledNumbers); // [6, 112, 4, 96, 10]

//Filter - Create a new array by keeping ONLY the items that return true.
function isEven(nbr) {
  return nbr % 2 === 0;
}

let evenNumbers = numbers.filter(isEven);
console.log("Even Numbers with Filter: ", evenNumbers); // [56, 2, 48]

//Reduce - Accumulate a value by doing something to each item in an array.
function reducedNumber(accumulator, nbr) {
  // console.log("accumulator:", accumulator);
  // console.log("number:", nbr);
  return accumulator + nbr;
}
let reducedNumbers = numbers.reduce(reducedNumber);
console.log("Sum all with reduce: ", reducedNumbers); // 114

//Find - find the first item that matches from an array.
function findNumberFortys(nbr) {
  return nbr > 40 && nbr < 50;
}

let foundNumber = numbers.find(findNumberFortys);
console.log("First number between 40 and 50 with Find: ", foundNumber); // 48

//FindIndex - find the index of the first item that matches.
function findIndexNumberFortys(nbr) {
  return nbr > 40 && nbr < 50;
}

let foundIndexNumber = numbers.findIndex(findIndexNumberFortys);
console.log(
  "Index of first number between 40 and 50 with FindIndex: ",
  foundIndexNumber
); // 3

//EmojePedia Challenge - Get meaning 100 charats max
function get100meaning(emoji) {
  return emoji.meaning.substring(0, 100);
}

let meaning100 = emojipedia.map(get100meaning);
console.log("Meaning 100 characters max: ", meaning100);
