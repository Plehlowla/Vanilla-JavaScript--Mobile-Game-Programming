/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ball;
var paddle;
var score;
var playingArea;

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

window.addEventListener('load', init);
window.addEventListener('resize', init);

function init(){
    ball = document.getElementById('ball');
    paddle = document.getElementById('paddle');
    score = document.getElementById('score');
    playingArea = document.getElementById('playingArea');
    layoutPage();
    document.addEventListener('keydown', keyListener, false);
    
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
        if(ballLeft >= paddleLeft && ballLeft <= paddleLeft + 64){
            return true;
        }
    }
    return false;
    
}

