window.onload = function() { //loads my beautifully drawn background image
    let canvas = document.getElementById("bCanvas");
    let ctx = canvas.getContext("2d");
    let img = document.getElementById("bg");
    ctx.drawImage(img, 0, 0);


let canvas = document.getElementById("mCanvas");
let ctx = canvas.getContext("2d");

let down = false;
let up = false;
let right = false;
let left = false;

//just some properties for the player
let px = 50;
let py = 320;
let speed = 10;
let sideLength = 80;

function erase() {
    context.fillRect(0, 0, 800, 600);
}

// Listen for keydown events
canvas.addEventListener('keydown', function(event) {
    event.preventDefault();
    console.log(event.key, event.keyCode);
    if (event.keyCode === 40) { // DOWN
      down = true;
    }
    if (event.keyCode === 38) { // UP
      up = true;
    }
    if (event.keyCode === 37) { // LEFT
      left = true;
    }
    if (event.keyCode === 39) { // RIGHT
      right = true;
    }
  });
  
  // Listen for keyup events
  canvas.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.key, event.keyCode);
    if (event.keyCode === 40) { // DOWN
      down = false;
    }
    if (event.keyCode === 38) { // UP
      up = false;
    }
    if (event.keyCode === 37) { // LEFT
      left = false;
    }
    if (event.keyCode === 39) { // RIGHT
      right = false;
    }
  });

//draw loop
function draw() {
    erase();
    // drawing the player
    context.fillStyle = '#FF0000';
    ctx.fillRect(px, py, sideLength, sideLength)

}}