let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let background = new Image();
background.src = "https://imgur.com/a/psIxp2X";

background.onload = function(){
    ctx.drawImage(background,0,0);   
}