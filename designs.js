// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height;
var width;
let form = document.querySelector('form');
form.addEventListener('submit', makeGrid);

// Following code is to handle only clicks instead of mouse drag.
pixelCanvas.addEventListener(
    'mousedown', () => drag = false);

pixelCanvas.addEventListener(
    'mousemove', () => drag = true);

pixelCanvas.addEventListener(
    'mouseup', () => drag ? 'drag' : colorGrid());


function colorGrid() {
    event.target.style.backgroundColor =
        document.getElementById("colorPicker").value;
}

function makeGrid() {
    // Your code goes here!
    event.preventDefault();
    const pixelCanvas = document.getElementById('pixelCanvas');

    pixelCanvas.innerHTML = '';
    height = document.getElementById("inputHeight").value;
    width = document.getElementById("inputWidth").value;
    for (let j = 1; j <= height; j++) {
        const TR = document.createElement('tr');
        for (let i = 1; i <= width; i++) {
            const TD = document.createElement('td');
            TD.setAttribute("id", "td" + j + "-" + i);
            TR.appendChild(TD);
        }
        pixelCanvas.appendChild(TR);
    }

}
