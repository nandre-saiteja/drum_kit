//DETECTING THE BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //the above one is for the button clicks
        
        //  this.style.color="red"; // this referes to the identity which triggered the button
        // console.log(this.innerHTML);// in this case we can know the button we clicked in the developer tools
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);  
        buttonAnimation(buttonInnerHTML);
    });

}

//DETECTING THE KEYBOARD PRESS
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
                // var audio = new Audio("/Drum kit/tom-1.mp3");
                // audio.play();
                // innerHTML in this case is w
                var tom1 = new Audio("/Drum kit/tom-1.mp3");
                tom1.play();
                break;

        case "a":
                var tom2 = new Audio("/Drum kit/tom-2.mp3");
                tom2.play();
                break;
    
        case "s":
                var tom3 = new Audio("/Drum kit/tom-3.mp3");
                tom3.play();
                break;

        case "d":
                var tom4 = new Audio("/Drum kit/tom-4.mp3");
                tom4.play();
                break;

        case "j":
                var snare = new Audio("/Drum kit/snare.mp3");
                snare.play();
                break;

        case "k":
                var crash = new Audio("/Drum kit/crash.mp3");
                crash.play();
                break;

        case "l":
                var kick = new Audio("/Drum kit/kick-bass.mp3");
                kick.play();
                break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    //100 is ms that is 0.1 sec
    //function and time
}