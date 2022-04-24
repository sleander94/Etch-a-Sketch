const background = 'gray';
let drawColor = 'blue';
const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    div = document.createElement('div');
    div.classList.toggle('square')
    container.appendChild(div);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = drawColor;
}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    squares.forEach(square => square.style.backgroundColor = background);
});


