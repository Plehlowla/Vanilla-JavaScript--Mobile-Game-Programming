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
    if((e.keyCode == 37 || e.keyCode == 65) && paddleLeft > 0){
        paddleLeft -= pdx;
        if(paddleLeft < 0)
            paddleLeft = 0;
        paddle.style.left = paddleLeft + 'px';
    }
    if((e.keyCode == 39 || e.keyCode == 68) && paddleLeft < pWidth - 64){
        paddleLeft += pdx;
        if(paddleLeft > (pWidth - 64))
            paddleLeft = pWidth - 64;
        paddle.style.left = paddleLeft + 'px';
    }
}

