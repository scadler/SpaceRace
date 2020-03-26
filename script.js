//creating canvas & getting context
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");
const user = {
    y : canvas.height-100,
    x : canvas.width/2,
    width : 15,
    color : "White",
    movement : 0,
    Vy : 0,
    Vx : 0,
}
var s = {
    i: 0,
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
function drawUser(x,y){
    user.x += user.Vx
    user.y += user.Vy
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "rgba(0, 0, 0, 0,)";
    let height = 30 * Math.cos(Math.PI / 6);
    context.moveTo(x, y);
    context.lineTo(x+15, y - height/2.5)
    context.lineTo(x+30, y);
    context.lineTo(x+15, y - height);
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
    if(user.y > canvas.height-50){
        user.y = canvas.height-51
    }
    else if(user.y < canvas.height-200){
        user.y = canvas.height-199
    }
}
function render(){
drawRect(0, 0, canvas.width, canvas.height, "#000000'");
drawUser(user.x,user.y)
}
function game(){
    render();
    update();
}
setInterval(game,)
document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyUp)
function keyPressed(e){
    key = e.key
    if(key =="a"  || e.keyCode ==37){
        user.Vx = -0.7
    }
    else if(key =="d"|| e.keyCode ==39){
        user.Vx = 0.7
    }
    else if(key =="w" || e.keyCode ==38){
        user.Vy = -0.3
    }
    else if(key =="s"|| e.keyCode ==40){
        user.Vy = 0.3
    }
    if(key == " ") {
    e.preventDefault();
  }
}
function keyUp(){
    user.Vy = 0
    user.Vx = 0
}