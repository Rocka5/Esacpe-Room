console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/1.jpg",
  "images/2.jpg",
  "images/3.png",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.png",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.png",
  "images/8.jpg",
  "images/flashlight.png",
  "images/frontpad.png",
  "images/hschool.jpg",
  "images/intro2.png",
  "images/rusty.png",
  "images/sidepad.png",
  "images/spookytext.png",
  "images/TEXTBOX2.png"
);
