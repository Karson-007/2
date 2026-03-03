// Wait for the DOM to be fully loaded before executing JavaScript
 document.addEventListener('DOMContentLoaded', function() {
 
     var button = document.getElementById('click-button');
     var img = document.getElementById('deng');

     var buttonPressed = 0; 
 
     button.addEventListener('click', function(){
       button.classList.add('button-animation');
       if(buttonPressed === 0){
            buttonPressed = 1
            img.classList.add('opacity-0');
          }else {
            buttonPressed = 0
            img.classList.remove('opacity-0')
          }
          
     })
 });
