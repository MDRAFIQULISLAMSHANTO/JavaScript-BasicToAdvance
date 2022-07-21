var c = document.getElementById("mycanvas");
var context = c.getContext("2d");
context.strokeStyle = "black"; //colour of the border
context.strokeRect(10,20,380,400); // border of the rectangle
context.fillStyle = "green"; //colour for the rectangle
context.fillRect(12,22,380,400); // area for the rectangle 

var centerX = context.width/2;
var centerY = context.height/2;

context.beginPath();
context.arc(centerX,centerX,30,0,2*Math.PI,false);
context.fillStyle = "red";
context.fill();
context.stroke();