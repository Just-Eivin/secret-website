let audio = new Audio('love.mp3');
let mouseImage = document.querySelector('.picture');
let playing = false;

mouseImage.addEventListener('click', ()=>{
    if(playing == true) {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    } else {
        audio.play();
        playing = true;
    }
})

