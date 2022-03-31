//setting up variable for the canvas size slider
const canvasSlider = document.querySelector('#canvasSlider');

//setting up canvas wrapper variable
const canvasWrapper = document.querySelector('.canvas-wrapper')

//random hex value
let randomColor = Math.floor(Math.random()*16777215).toString(16);

//function that inserts divs into wrapper
function drawSquare() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-square";
    canvasWrapper.appendChild(newDiv);
}

//function that creates a variable number of squares arranged in a grid in div.canvas-wrapper
function drawCanvas() {
    if (parseInt(canvasSlider.value) === 1) {
        for (let i = 0; i < 16; i++) {
            drawSquare();
        }
    }
    console.log(canvasSlider.value);
}

drawCanvas();

//setting up hover effect so that grid divs change color on hover and retain that new color (add class)
//random hex value
