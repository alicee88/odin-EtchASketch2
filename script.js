const containerDiv = document.querySelector('.container');
const cells = new Array(256);
const cellSize = '2rem';
function setupGrid() {
    for (let i = 0; i < 256; i++) {
        cells[i] = document.createElement('div');
        cells[i].style.border = '1px solid black';
        cells[i].style.height = cellSize;
        cells[i].style.width = cellSize;
        cells[i].classList.add('cell');
        containerDiv.appendChild(cells[i]);
        cells[i].addEventListener('mouseenter', paint);
    }
}

function paint(e) {
    this.style.backgroundColor = 'coral';
}

setupGrid();