window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const stopButton = document.querySelector("#stop");
  if (e.keyCode === 32) {
    window.stop();
  } else {
    audio.currentTime = 0;
    audio.volume = 0.25;
    audio.play();
    key.classList.add("buttonClick");
  }
});
window.addEventListener("keyup", function(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.remove("buttonClick");
});

function stop() {
  console.log("clicked");
  document.location.reload();
}

function SetVolume(val) {
  var audio = document.querySelector(`audio[data-key="${val.id}"]`);
  var volume = val.value / 100 / 2;
  audio.volume = volume;
}
