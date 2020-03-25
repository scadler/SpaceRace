//creating canvas & getting context
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");
const user = {
    y : canvas.height,
    width : 15,
    color : "White",
}
const ball = {
    x : 100,
    y : 100,
    radius : 20,
    color : "White",
    angleOld : 0,
    speed : 0.5,
    i : 0,
}
//draw functions 
function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}
var colorI = 0;
function collision(){
    // if((Math.abs(ball.x - shot.x) < ball.radius+shot.radius)&&(Math.abs(ball.y - shot.y) < ball.radius+shot.radius)&& shot.exists === true){
    //     shot.exists = false
    //     ball.radius = (Math.random()+1) * 10
    //     ball.angleOld = 2*Math.PI*Math.random()
    //     ball.speed = 0.5 + (Math.random()/2)
    //     ball.i = 1
    //     $("#scoreNumber").text((Number($("#scoreNumber").text())+1))
    // }
}
var a = 0
function drawUser(y){
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "rgba(0, 0, 0, 0,)";
    context.moveTo(canvas.width/3 - 10, y);
    context.lineTo(canvas.width/3 - 10, y-40);
    context.lineTo(canvas.width/3 + 10, y-40)
    context.lineTo(canvas.width/3 + 10, y);
    context.closePath();
    context.fill();
    context.lineWidth = 1.5;
    context.strokeStyle = "white"
    context.stroke();
}

function drawCircle(x, y, r){
    context.fillStyle = "black";
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.closePath();
    context.fill();
    context.stroke();
}
function drawText(text,x, y, color){
    context.fillStyle = color;
    context.font = "75px arial";
    context.fillText(text, x, y);
}
function update(){

}
function render(){
drawRect(0, 0, canvas.width, canvas.height, "#000000'");
drawUser(user.y)
}
function game(){
    render();
    update()
}
setInterval(game,)
document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyUp)
function keyPressed(e){
    key = e.key
    if(key == " ") {
    user.y = user.y - 1
  }
}