window.addEventListener("load", init);
function init() {
  intro = document.getElementById("intro");
  gameDiv = document.getElementById("game");
  startButton = document.getElementById("start");
  howToPlayButton = document.getElementById("how-to-play");
  reloadButton = document.getElementById("reload");
  img = document.getElementById("output");
  input = document.getElementById("file");

  startButton.addEventListener("click", start);
  howToPlayButton.addEventListener("click", htplay);
  reloadButton.addEventListener("click", reload);

  game.style.display = "none";
}
const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);

function start() {
  intro.style.display = "none";
  gameDiv.style.display = "block";
}

function htplay() {
  window.alert(
    "When you start the game you're expected to take a picture of a banana! \nIf you take a picture of a banana and the AI reconizes it you get a point!"
  );
}

function fileAdded() {
  input.style.display = "none";
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = "inline-block";
  classify();
  retrybtn.style.display = "inline-block";
}

function reload() {
  img.style.display = "none";
  input.value = null;
  input.style.display = "inline-block";
  console.log(img.src);
  URL.revokeObjectURL(img.src);
  img.src = "";
  location.reload();
}
