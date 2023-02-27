const button = document.getElementById("bt");
button.addEventListener("click", vib);

function vib(e) {
  e.target.innerHTML = "noooo";
  navigator.vibrate(200);
}
