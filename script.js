const containerDiv = document.querySelector('.container');
const updateButton = document.querySelector('#submit');
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
    numberOfCells = gridSizeInput.value;
    setupGrid();
}

updateButton.addEventListener('click', updateGridSize);



setupGrid();