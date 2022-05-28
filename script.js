const containerDiv = document.querySelector('.container');
const gridSizeInput = document.querySelector('#gridsize');
const colourInput = document.querySelector('#colour');
const cells = new Array(10000);
let numberOfCells = 16;

function setupGrid() {
    containerDiv.textContent = "";
    containerDiv.style.gridTemplate = `repeat(${numberOfCells}, 1fr) / repeat(${numberOfCells}, 1fr)`;
    for (let i = 0; i < (numberOfCells * numberOfCells); i++) {
        cells[i] = document.createElement('div');
        cells[i].classList.add('cell');
        containerDiv.appendChild(cells[i]);
        cells[i].addEventListener('mouseenter', paint);
    }
}

function paint(e) {
    this.style.backgroundColor = colourInput.value;
}

function updateGridSize(e) {
    if (gridSizeInput.value < 2) {
        numberOfCells = 2;
        gridSizeInput.value = 2;
    }
    else if (gridSizeInput.value > 100) {
        numberOfCells = 100;
        gridSizeInput.value = 100;
    }
    else {
        numberOfCells = gridSizeInput.value;
    }
    setupGrid();
}

gridSizeInput.addEventListener('change', updateGridSize);


setupGrid();