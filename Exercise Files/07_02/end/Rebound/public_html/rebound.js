/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ball;
var paddle;
var score;
var playingArea;
var gear;
var controls;
var newButton;
var difficultySelect;
var doneButton;

var aWidth;
var aHeight;
var pWidth;
var pHeight;
var dx = 2;
var dy = 2;
var pdx = 48;
var currentScore = 0;
var timer;
var paddleLeft = 228;
var ballLeft = 100;
var ballTop = 8;
var drag = false;

window.addEventListener('load', init);
window.addEventListener('resize', init);

function init(){
    ball = document.getElementById('ball');
    paddle = document.getElementById('paddle');
    score = document.getElementById('score');
    playingArea = document.getElementById('playingArea');
    gear = document.getElementById('gear');
    controls = document.getElementById('controls');
    newButton = document.getElementById('new');
    difficultySelect = document.getElementById('difficulty');
    doneButton = document.getElementById('done');
    layoutPage();
    document.addEventListener('keydown', keyListener, false);
    
    playingArea.addEventListener('mousedown',mouseDown,false);
    playingArea.addEventListener('mousemove',mouseMove,false);
    playingArea.addEventListener('mouseup',mouseUp,false);
    playingArea.addEventListener('touchstart',mouseDown,false);
    playingArea.addEventListener('touchmove',mouseMove,false);
    playingArea.addEventListener('touchend',mouseUp,false);
    
    timer = requestAnimationFrame(start);
}

function layoutPage(){
    aWidth = innerWidth;
    aHeight = innerHeight;
    pWidth = aWidth - 22;
    pHeight = aHeight - 22;
    playingArea.style.width = pWidth + 'px';
    playingArea.style.height = pHeight + 'px';
}

function keyListener(e){
    var key = e.keyCode;
    if((key == 37 || key == 65) && paddleLeft > 0){
        paddleLeft -= pdx;
        if(paddleLeft < 0)
            paddleLeft = 0;
        
    }else if((key == 39 || key == 68) && paddleLeft < pWidth - 64){
        paddleLeft += pdx;
        if(paddleLeft > (pWidth - 64))
            paddleLeft = pWidth - 64;
        
    }
    paddle.style.left = paddleLeft + 'px';
}

function start(){
    render();
    detectCollisions();
    difficulty();
    if(ballTop < pHeight - 36){
        timer = requestAnimationFrame(start);
    }else{
        gameOver();
    }
}

function render(){
    moveBall();
    updateScore();
}
function moveBall(){
    ballLeft += dx;
    ballTop += dy;
    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';
}
function updateScore(){
    currentScore += 5;
    score.innerHTML = "Score: " + currentScore;
}

function detectCollisions(){
    if(collisionX()){
        dx *= -1;
    }
    if(collisionY()){
        dy *= -1;
    }
}
function collisionX(){
    if(ballLeft < 4 || ballLeft > pWidth - 20){
        return true;
    }
    return false;
}
function collisionY(){
    if(ballTop < 4){
        return true;
    }
    if(ballTop > pHeight - 64){
        /*
        if(ballLeft >= paddleLeft && ballLeft <= paddleLeft + 64){
            return true;
        }
        */
       if(ballLeft >= paddleLeft + 16 && ballLeft < paddleLeft + 48){
           if(dx < 0){
               dx = -2;
           }else{
               dx = 2;
           }
           return true;
       }else if(ballLeft >= paddleLeft && ballLeft < paddleLeft + 16){
           if(dx < 0){
               dx = -8;
           }else{
               dx = 8;
           }
           return true;
       }else if(ballLeft >= paddleLeft + 48 && ballLeft <= paddleLeft + 64){
           if(dx < 0){
               dx = -8;
           }else{
               dx = 8;
           }
           return true;
       }
    }
    return false;
    
}

function difficulty(){
    if(currentScore % 1000 == 0){
        if(dy > 0)
            dy += 2;
        else
            dy -= 2;
    }
}

function gameOver(){
    cancelAnimationFrame(timer);
    score.innerHTML += "    Game Over!";
    score.style.backgroundColor = 'rgb(128,0,0)';
}

function mouseDown(e){
    drag = true;
}

function mouseUp(e){
    drag = false;
}

function mouseMove(e){
    if(drag){
        e.preventDefault();
        paddleLeft = e.clientX - 32 || e.targetTouches[0].pageX - 32;
        if(paddleLeft < 0)
            paddleLeft = 0;
        if(paddleLeft > (pWidth - 64))
            paddleLeft = pWidth - 64;
        paddle.style.left = paddleLeft + 'px';
    }
}

