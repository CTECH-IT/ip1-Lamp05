let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasHeight = 600
let canvasWidth = 800

//player starting points
let rectX = (canvas.width - 80) / 2;
let rectY = canvas.height - 80;

//enemy starting points
let cubeX = canvas.width / 2 - 10;
let cubeY = 0;

//player speed
let rectSpeed = 5;

//enemie speed
let cubeSpeed = 2.5;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let score = 0;

let lives = 3;

//draws the rectangle the player controls
function drawRectangle() {
  ctx.beginPath();
  ctx.rect(rectX, rectY, 80, 80);
  ctx.fillStyle = "#483d8b";
  ctx.fill();
  ctx.closePath();
}

//draws the enemy the player has to destroy
function drawCube() {
  ctx.beginPath();
  ctx.rect(cubeX, cubeY, 20, 20);
  ctx.fillStyle = "#98fb98";
  ctx.fill();
  ctx.closePath();

  cubeY += cubeSpeed
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

  //rect controls
  if (rightPressed) {
    rectX += rectSpeed;
    if (rectX + 80 > canvas.width) {
      rectX = canvas.width - 80
    }
  }
  else if (leftPressed) {
    rectX -= rectSpeed;
    if (rectX < 0) {
      rectX = 0;
    }
  }
  if (downPressed) {
    rectY += rectSpeed;
    if (rectY + 80 > canvas.height) {
      rectY = canvas.height -80
    }
  }
  else if (upPressed) {
    rectY -= rectSpeed;
    if (rectY < 0) {
      rectY = 0;
    }
  }

  drawRectangle();

  drawCube();

  drawScore();

  drawLives();
}

//checks whether keys are pushed
function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
  if (e.key == "up" || e.key == "ArrowUp") {
    upPressed = true;
  }
  else if (e.key == "down" || e.key == "ArrowDown") {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
  if (e.key == "up" || e.key == "ArrowUp") {
    upPressed = false;
  }
  else if (e.key == "down" || e.key == "ArrowDown") {
    downPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw, 10);