// Tạo canvas

const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");
//Tạo bg
const BG_IMG = new Image();
BG_IMG.src = "img/bg1.jpg"
//Tạo viền
cvs.style.border = "1px solid #0ff"
ctx.lineWidth = 3;
//Tạo các giá trị và thuộc tính

const PADDLE_WIDTH = "100";
const PADDLE_HEIGHT = "20";
const PADDLE_MARGIN_BOTTOM = "50";
let leftArrow = false;
let rightArrow = false;
//Tạo mái chèo

const paddle = {
    x: cvs.width/2 - PADDLE_WIDTH/2,
    y: cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dx: 5
}

//Vẽ mái chèo
function drawPaddle(){
    ctx.filltyle = "#2e3548";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.strokeStyle = "#ffcd05";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}
//Điều khiển mái chèo
document.addEventListener('keydown', function(event){
    if(event.keyCode == 37){
        leftArrow = true;
    }else if(event.keyCode == 39){
        rightArrow = true;
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
      leftArrow = false;
    } else if (event.keyCode == 39) {
      rightArrow = false;
    }
  });
//Di chuyển mái chèo

function movePaddle() {
    if (rightArrow && paddle.x + paddle.width < cvs.width) {
      paddle.x += paddle.dx;
      console.log("phai")
    } else if (leftArrow && paddle.x > 0) {
      paddle.x -= paddle.dx;
      console.log("trai")
    }
  }


//Hàm vẽ 
function draw(){
    drawPaddle();
    
}
function deletePaddle() {
    ctx.clearRect(paddle.x, paddle.y, paddle.width, paddle.height);
  }
//Hàm update
function update(){
    // deletePaddle();
    movePaddle();
}

//tạo vòng lặp 
function loop(){
    //thêm bg
    // console.log(paddle);
    ctx.drawImage(BG_IMG, 0, 0);
    draw();
    update();
    requestAnimationFrame(loop);
}
loop();