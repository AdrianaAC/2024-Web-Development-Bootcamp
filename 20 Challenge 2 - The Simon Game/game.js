const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let clickedButton = $(".btn").attr("id");


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}

$(".btn").click(function () {
  clickedButton = $(this).attr("id");
  $(this).fadeOut(100).fadeIn(100);
  let audio = new Audio("./sounds/" + clickedButton + ".mp3");
  audio.play();
});
