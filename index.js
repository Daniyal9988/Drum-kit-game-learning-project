var noOfButtons = document.querySelectorAll(".drum").length;


//detecting mouse click 
for(var i = 0 ; i< noOfButtons ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
    }
    );
}



//detecting keyboard press
document.addEventListener("keydown" , function(event){
    var keyPressed = event.key;
    makeSound(keyPressed);
    addAnimation(event.key);
} )



function makeSound(event)
{
    switch (event) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
    
        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
    
        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
    
        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
    
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
    
    
        default: console.log(key);

    };
}


function addAnimation (button)
{
    var buttonPressed = document.querySelector("." + button);
    buttonPressed.classList.add("pressed");

    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100);
}