//setting up variable for the canvas size slider
const canvasSlider = document.querySelector('#canvasSlider');

//setting up canvas wrapper variable
const canvasWrapper = document.querySelector('.canvas-wrapper')

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