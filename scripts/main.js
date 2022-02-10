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

    drawScore();

    drawLives();

    //collision between cube and player
    if (cubeX < rectX + rectL &&
      cubeX + cubeL > rectX &&
      cubeY < rectY + rectL &&
      cubeL + cubeY > rectY) {
        score += 1;
      }

    //if the enemy reaches the bottom, 1 life is removed
    if (cubeY == canvas.height) {
      lives -= 1;
    }
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