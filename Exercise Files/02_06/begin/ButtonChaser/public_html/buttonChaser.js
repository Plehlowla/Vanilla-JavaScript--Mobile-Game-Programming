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
    moveDot();
}

function detectHit(){
    score += 1;
    document.getElementById('scoreLabel').innerHTML = "Score: " + score;
}

