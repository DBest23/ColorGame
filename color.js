var colors = [];
var numOfSquares = 6
var pickedColor;
var squares = document.querySelectorAll(".Square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
    reset();
});

init();

function init(){
    setModeButtons();
    setSquares();
    reset();
}

function setModeButtons(){
    for(var i=0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares=3: numOfSquares=6;
            reset();
        });
    }
}
function setSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click",function(){
            var squareColor = this.style.background;
            if(squareColor === pickedColor){
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
                h1.style.background = pickedColor;
                resetButton.textContent = "Play Again";
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}


function reset(){
    colors = generateRandColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
            }else{
            squares[i].style.display = "none";
            }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}




function changeColors(color){
    for(var i =0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandColors(len){
    var arr = [];
    for(var i=0; i<len; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}