/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations;

window.addEventListener('load', setGameAreaBounds);

function setGameAreaBounds(){
    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -= 97;
    document.getElementById('gameArea').style.width = aWidth + 'px';
    document.getElementById('gameArea').style.height = aHeight + 'px';
    document.getElementById('dot').addEventListener('click', detectHit);
    aWidth -= 74;
    aHeight -= 74;
    moveDot();
}

function detectHit(){
    score += 1;
    document.getElementById('scoreLabel').innerHTML = "Score: " + score;
}

function moveDot(){
    var x = Math.floor(Math.random()*aWidth);
    var y = Math.floor(Math.random()*aHeight);
    if(x<10)
        x = 10;
    if(y<10)
        y = 10;
    document.getElementById("dot").style.left = x + 'px';
    document.getElementById("dot").style.top = y + 'px';
}

