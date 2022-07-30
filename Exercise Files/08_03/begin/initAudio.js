
function initAudio(){
    //load audio files
    beepX = new Audio('sounds/beepX.mp3');
    beepY = new Audio('sounds/beepY.mp3');
    beepPaddle = new Audio('sounds/beepPaddle.mp3');
    beepGameOver = new Audio('sounds/beepGameOver.mp3');
    bgMusic = new Audio('sounds/music.mp3');
    //turn off volume
    beepX.volume = 0;
    beepY.volume = 0;
    beepPaddle.volume = 0;
    beepGameOver.volume = 0;
    bgMusic.volume = 0;
    //play each file
    //this grants permission
    beepX.play();
    beepY.play();
    beepPaddle.play();
    beepGameOver.play();
    bgMusic.play();
    //pause each file
    //this stores them in memory for later
    beepX.pause();
    beepY.pause();
    beepPaddle.pause();
    beepGameOver.pause();
    bgMusic.pause();
    //set the volume back for next time
    beepX.volume = 1;
    beepY.volume = 1;
    beepPaddle.volume = 1;
    beepGameOver.volume = 1;
    bgMusic.volume = 1;
}
