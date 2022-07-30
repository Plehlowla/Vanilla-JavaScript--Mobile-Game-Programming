/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var currentX = 100;
var currentY = 100;

function animate(){
    document.getElementById('ball').style.left = currentX + 'px';
    document.getElementById('ball').style.top = currentY + 'px';
    currentX += 5;
    currentY += 5;
    if(currentX > 800 || currentY > 600){
        return;
    }
    setTimeout('animate()', 10);
}

window.addEventListener('load',animate);
