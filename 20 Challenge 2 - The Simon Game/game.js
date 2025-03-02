var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level 0");
    nextSequence();
    started = true;
  }
});

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () {
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  //5. Playing sound for the button colour selected by the user
  playSound(userChosenColour);

  //6. Animate the button pressed by the user
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    $(document).keypress(startOver());
  }
}
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  level++;
  $("h1").text("Level " + level);
  gamePattern.push(randomChosenColour);

  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

//5. Refactoring to playSound function
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//6. Refactoring to animatePress function
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
