window.addEventListener("load", init);
const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);

function init() {
  intro = document.getElementById("intro");
  gameDiv = document.getElementById("game");
  startButton = document.getElementById("start");
  howToPlayButton = document.getElementById("how-to-play");
  reloadButton = document.getElementById("reload");

  startButton.addEventListener("click", start);
  howToPlayButton.addEventListener("click", htplay);
  reloadButton.addEventListener("click", reload);

  game.style.display = "none";
}
function start() {
  intro.style.display = "none";
  game.style.display = "block";
}

function htplay() {
  window.alert(
    "When you start the game you're expected to take a picture of a banana! \nIf you take a picture of a banana and the AI reconizes it you get a point!"
  );
}

function reload() {
  location.reload();
}
