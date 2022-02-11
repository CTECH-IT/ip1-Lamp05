let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasHeight = 600
let canvasWidth = 800

//player attributes
let rectL = 20;
let rectX = canvas.width / 2 - (rectL / 2);
let rectY = canvas.height - rectL;

//enemy attributes
let cubeL = 20;
let cubeX = canvas.width / 2 - (cubeL / 2);
let cubeY = 0;

//power up attributes
let powL = 5;
let powX = (Math.random() * canvas.width - powL);
let powY = (Math.random() * canvas.width - powL);

//player speed
let rectSpeed = 5;

//enemie speed
let cubeSpeed = 1;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let score = 0;

let lives = 3;

let level = 1;

//draws the rectangle the player controls
function drawRectangle() {
  ctx.beginPath();
  ctx.rect(rectX, rectY, rectL, rectL);
  ctx.fillStyle = "#483d8b";
  ctx.fill();
  ctx.closePath();
}

//draws the enemy the player has to destroy
function drawCube() {
  ctx.beginPath();
  ctx.rect(cubeX, cubeY, cubeL, cubeL);
  ctx.fillStyle = "#98fb98";
  ctx.fill();
  ctx.closePath();

  cubeY += cubeSpeed
}

//draws the power up
function drawPow() {
  ctx.beginPath();
  ctx.rect(powX, powY, powL, powL);
  ctx.fillStyle = "#2f4f4f";
  ctx.fill();
  ctx.closePath
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
  ctx.fillText("LEVEL:" + level, 10, 80)
}

//the main draw function
function draw() {

  //clears the canvas so that objects don't leave trails
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  //player controls, also checks if the player is out of bounds, if so then the player is blocked
  if (rightPressed) {
    rectX += rectSpeed;
    if (rectX + 20 > canvas.width) {
      rectX = canvas.width - rectL
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
    if (rectY + 20 > canvas.height) {
      rectY = canvas.height - rectL
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

  drawPow();

  drawScore();

  drawLives();

  drawLevel();

  if //collision between cube and player
    (cubeX < rectX + rectL &&
    cubeX + cubeL > rectX &&
    cubeY < rectY + rectL &&
    cubeL + cubeY > rectY) {
    score += 10;
    level += 1;
    cubeSpeed += .9;
    cubeY = 0;
    cubeX = (Math.random() * canvas.width - cubeL);
  }

  if //collision between player and power up. If the player touches the power up, they get an extra life, but the score reduces by five
    (powX < rectX + rectL &&
    powX + powL > rectX &&
    powY < rectY + rectL &&
    powL + powY > rectY) {
    score -= 5;
    lives += 1;
    powX = (Math.random() * canvas.width - powL);
    powY = (Math.random() * canvas.height - powL);
    }

  //if the enemy reaches the floor, the player loses a life and the cube is reset
  if (cubeY > canvas.height) {
    cubeY = 0;
    cubeX = (Math.random() * canvas.width - cubeL);
    lives -= 1;
  }

  //if the player has 0 lives, the game resets and "game over" is displayed
  if (lives == 0) {
    document.location.reload(); alert("GAME OVER");
  }

  if (cubeY < 0) {
    document.location.reload(); alert("GAME OVER")
  }

  if (level == 10) {
    document.location.reload(); alert("GAME WON, SCORE:" + score)
  }
}

//checks wether keys are pushed
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

//checks wether keys are not pushed
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