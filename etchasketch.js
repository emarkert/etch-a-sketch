const DEFAULT_SIZE = 16
const DEFAULT_COLOR ='#222222'

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE

const grid = document.getElementById('grid')
const clearBtn = document.getElementById('clear-btn')
const colorPicker = document.getElementById('colorPicker')
const sizeValue = document.getElementById('current-size')
const sizeSlider = document.getElementById('sizeSlider')

clearBtn.onclick = () => reloadGrid()
colorPicker.onchange = (e) => setCurrentColor(e.target.value)
sizeSlider.onchange = (e) => updateGrid(e.target.value)
sizeSlider.onmousemove = (e) => updateCanvasValue(e.target.value)

function setCurrentSize(newSize) {
    currentSize = newSize
}

function setCurrentColor(newColor) {
    currentColor = newColor
}

function updateGrid(value) {
    setCurrentSize(value)
    updateCanvasValue(value)
    reloadGrid()
}

function updateCanvasValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
    grid.innerHTML = ''
    drawGrid(currentSize)
}

function drawGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add("grid-square")
        newDiv.addEventListener('mouseover', changeColor)
        grid.appendChild(newDiv)
    }
}

function changeColor(e) {
  e.target.style.backgroundColor = currentColor
}

window.onload = () => {
    drawGrid(DEFAULT_SIZE)
}