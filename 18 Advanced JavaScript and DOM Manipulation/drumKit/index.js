for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    buttonInteraction(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  buttonInteraction(event.key);
  buttonAnimation(event.key);
});

function buttonInteraction(keyPressed) {
  let dAudio = new Audio("sounds/snare.mp3");
  let wAudio = new Audio("sounds/crash.mp3");
  let aAudio = new Audio("sounds/tom-3.mp3");
  let sAudio = new Audio("sounds/kick-bass.mp3");
  let jAudio = new Audio("sounds/tom-1.mp3");
  let kAudio = new Audio("sounds/tom-2.mp3");
  let lAudio = new Audio("sounds/tom-4.mp3");

  switch (keyPressed) {
    case "d":
      dAudio.play();
      break;
    case "w":
      wAudio.play();
      break;
    case "a":
      aAudio.play();
      break;
    case "s":
      sAudio.play();
      break;
    case "j":
      jAudio.play();
      break;
    case "k":
      kAudio.play();
      break;
    case "l":
      lAudio.play();
      break;
    default:
      console.log("Error");
  }
}

function buttonAnimation(key) {
  activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 1000);
}
