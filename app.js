window.addEventListener("load", init);
const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);
const options = { numLabels: 2 };
const classifier = featureExtractor.classification(init.img, options);
const awns = document.getElementById("result");

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

let synth = window.speechSynthesis;

function speak(text) {
  if (synth.speaking) {
    synth.cancel();
    setTimeout(function () {
      synth.speak(text);
    }, 250);
  }
  if (text !== "") {
    let utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  }
}

function start() {
  intro.style.display = "none";
  gameDiv.style.display = "block";
  speak("Take a picture of a banana");
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
}

function classify() {
  classifier.classify(img, (err, result) => {
    console.log(err);
    console.log(result);
    if (result[0].label == "Banana") {
      awns.innerHTML = "Correct! that is a banana!";
      speak("Correct! that is a banana!");
    } else {
      awns.innerHTML = "That is not a banana, your AI overlord is displeased.";
      speak("That is not a banana, your AI overlord is displeased.");
    }
  });
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

function loadCustomModel() {
  featureExtractor.load("model/model.json");
  console.log("Custom model loaded");
}

function modelLoaded() {
  console.log("Model Loaded!");
  loadCustomModel();
}
