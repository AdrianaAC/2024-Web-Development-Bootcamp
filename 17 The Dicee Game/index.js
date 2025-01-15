function randomNumber1() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  console.log(dice1);
  return dice1;
}

function randomNumber2() {
  let dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(dice2);
  return dice2;
}

function dice1Img() {
  let dice1 = randomNumber1();
  let dice1Img = "./images/dice" + dice1 + ".png";
  return dice1Img;
}

function dice2Img() {
  let dice2 = randomNumber2();
  let dice2Img = "./images/dice" + dice2 + ".png";
  return dice2Img;
}

export { dice1Img, dice2Img };
