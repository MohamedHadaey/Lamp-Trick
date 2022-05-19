var demo = document.getElementById("demo");
var imgElement = document.getElementById("imgElement");
var turnOnOf = document.getElementById("turnOnOf");

function turnOn() {
  demo.style.backgroundColor = "yellow";
  imgElement.src = "images/pic_bulbon.gif";
  turnOnOf.innerHTML = "Turn Of";
}
function turnOf() {
  demo.style.backgroundColor = "gray";
  imgElement.src = "images/pic_bulboff.gif";
  turnOnOf.innerHTML = "Turn On";
}
function convert() {
  if (demo.style.backgroundColor == "yellow") {
    turnOf();
  } else {
    turnOn();
  }
}