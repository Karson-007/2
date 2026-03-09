// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('click-button');
    var img = document.getElementById('deng');

    var clickCount = 0;
    var triggerTimes = 5;
    var img1 = "goodman.gif";
    var img2 = "cyber_patina.gif";
    var isImg1Active = true;

    var bgm1 = new Audio('goodman.mp4');
    var bgm2 = new Audio('drive.mp4');
    bgm1.loop = true;
    bgm2.loop = true;
    bgm1.volume = 0.8;
    bgm2.volume = 0.8;

    img.src = img1;

    function moveButtonRandomly() {
        var windowWidth = window.innerWidth - button.offsetWidth;
        var windowHeight = window.innerHeight - button.offsetHeight;
        
        var randomX = Math.floor(Math.random() * windowWidth);
        var randomY = Math.floor(Math.random() * windowHeight);
        
        button.style.position = 'absolute';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }

    button.addEventListener('click', function(){
        moveButtonRandomly();
        clickCount++;

        if(clickCount >= triggerTimes){
            button.classList.add('button-animation');
        
            if(isImg1Active){
                img.src = img2;
                bgm1.pause();
                bgm2.currentTime = 0;
                bgm2.play()
                isImg1Active = false;
            } else {
                img.src = img1;
                bgm2.pause();
                bgm1.currentTime = 0;
                bgm1.play()
                isImg1Active = true;
            }
            
            clickCount = 0;
            
            setTimeout(() => {
                button.classList.remove('button-animation');
            }, 1000);
        }
    });
});