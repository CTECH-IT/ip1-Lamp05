var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var background = new Image();
background.src = "https://imgur.com/a/psIxp2X";

background.onload = function(){
    ctx.drawImage(background,0,0);   
}