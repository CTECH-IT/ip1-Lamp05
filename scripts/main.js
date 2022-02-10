let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasHeight = 600
let canvasWidth = 800

let speed = 5

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let score = 0;

let lives = 3;

//draws the rectangle the player controls
function drawRectangle() {
  ctx.beginPath();
  ctx.rect(canvas.width / 2 - 40, canvas.height - 80, 80, 80);
  ctx.fillStyle = "#483d8b";
  ctx.fill();
  ctx.closePath();
}

function drawCubes() {
  
}

//draws how many blocks the player has blocked from reaching the bottom
function drawScore() {
  ctx.font = "20px Monospace";
  ctx.fillStyle = "#2f4f4f";
  ctx.fillText("SCORE:" + score, 10, 20);
}

//draws how many lives the player has left
function drawLives() {
  ctx.font = "20px Monospace";
  ctx.fillStyle = "#2f4f4f";
  ctx.fillText("LIVES:" + lives, 10, 50)
}

//draws what level the player is on
function drawLevel() {
  ctx.font = "20px Monospace";
  ctx.fillStyle = "#2f4f4f";
  ctx.fillText("LEVEL:" + level, 10, 70)
}

//the main draw function
function draw() {
  
  //clears the canvas so that objects don't leave trails
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  drawRectangle();

  drawScore();

  drawLives();

  drawLevel();

}

let interval = setInterval(draw, 10);