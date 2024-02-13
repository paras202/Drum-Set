var n = document.querySelectorAll(".drum").length;
var i = 0;
while(i<n){
    document.querySelectorAll(".drum")[i].addEventListener( "click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
    i++;
}

document.addEventListener("keydown",function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        default: console.log();
    }
}

function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100);
}
//    this.style.color = "white";
// var audio = new Audio("sounds/crash.mp3");
//     audio.play();