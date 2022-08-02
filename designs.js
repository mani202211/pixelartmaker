//Descriptive variables are used for Height,Width.
var height;
var width;
let form = document.querySelector('form');
//Following Event Listener is handling submit to call makegrid() function.
form.addEventListener('submit', makeGrid);

// Following code is to handle only clicks instead of mouse drag.
pixelCanvas.addEventListener(
    'mousedown', () => drag = false);

pixelCanvas.addEventListener(
    'mousemove', () => drag = true);

pixelCanvas.addEventListener(
    'mouseup', () => drag ? 'drag' : colorGrid());

//This function is called to apply the color to the cell of table.
function colorGrid() {
    event.target.style.backgroundColor =
        document.getElementById("colorPicker").value;
}
//This function is used for creating the grid.
function makeGrid() {
    // Following line is to avoid refreshing of the form.
    event.preventDefault();
    const pixelCanvas = document.getElementById('pixelCanvas');
    pixelCanvas.innerHTML = '';
    height = document.getElementById("inputHeight").value;
    width = document.getElementById("inputWidth").value;
   // Following for loop is creating table grid using height and width values from input fields. 
    for (let j = 1; j <= height; j++) {
   // Table Row Element(TR) and Table Data Element(TD) is Crreated and appended to Table.
        const TR = document.createElement('tr');
        for (let i = 1; i <= width; i++) {
            const TD = document.createElement('td');
            TD.setAttribute("id", "td" + j + "-" + i);
            TR.appendChild(TD);
        }
        pixelCanvas.appendChild(TR);
    }

}
