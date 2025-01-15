function dice1Img() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  return { dice1: dice1, src: `images/dice${dice1}.png` }; // Return both the dice value and the image source
}

function dice2Img() {
  let dice2 = Math.floor(Math.random() * 6) + 1;
  return { dice2: dice2, src: `images/dice${dice2}.png` }; // Return both the dice value and the image source
}

function getWinner(dice1, dice2) {
  let statement;
  if (dice1 > dice2) {
    statement = "Player 1 Wins";
  } else if (dice2 > dice1) {
    statement = "Player 2 Wins";
  } else if (dice1 === dice2) {
    statement = "Draw";
  }
  return statement;
}
export { dice1Img, dice2Img, getWinner };
