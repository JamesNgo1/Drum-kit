
//section for the case the user press the buttons 
var buttonsLength = document.querySelectorAll(".drum").length;

for(var i = 0; i < buttonsLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonsHTML = this.innerHTML;
        makeSound(buttonsHTML);

        buttonAnimation(buttonsHTML);
    })
}


//section for the case the user press the keyboard

document.addEventListener("keypress", function(event){
    var keyboardPress = event.key;
    makeSound(keyboardPress);

    buttonAnimation(keyboardPress);
});


//function for the case of what sound to play 
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        default:
            alert("Invalid Key");
            console.log(buttonPress);
    }

}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");


    //settimeout(callback, delay)
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}


