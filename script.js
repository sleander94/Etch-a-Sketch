// Set color values
// Change draw color
let color = document.querySelector("#color");
color.addEventListener('input', () => {
    drawColor = color.value;
});

let drawColor = color.value;
let gridDimension = 16;



// Generate 'n' x 'n' grid and color each element on mouseover
const container = document.querySelector('#container');

function createGrid(n) {
    container.innerHTML = "";
    for (i = 0; i < n; i++) {
        column = document.createElement('div');
        column.classList.toggle('square');
        column.classList.toggle('column');
         for (x = 0; x < n; x++) {
            row = document.createElement('div');
            row.classList.toggle('square');
            row.classList.toggle('row');
            column.appendChild(row);
        } 
        container.appendChild(column);

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = drawColor;
    }))}};

// Create initial grid on page load
createGrid(16);

// Clear container on button press
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid(gridDimension);
});

// Change columns & rows on button press
const dimensions = document.querySelector("#dimensions");
const output = document.querySelector(".output");

output.textContent = `${dimensions.value} X ${dimensions.value}`;

dimensions.addEventListener('input', () => {
    output.textContent = `${dimensions.value} X ${dimensions.value}`;
    createGrid(dimensions.value);
});
