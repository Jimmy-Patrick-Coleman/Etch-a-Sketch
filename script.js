const buttonContainer = document.querySelector('#button-container')
const resetButton = document.createElement('button');
resetButton.textContent = 'reset';
resetButton.classList.add('resetButton');

const grid = document.querySelector('#grid-container');
 
function makeGrid(col, row) {
for (let i = 0; i < (col * row); i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    grid.appendChild(div);
}
}


function changeColor() {
    const divs = grid.querySelectorAll('.div')
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.cssText = 'background: red';
    }))
}



function resizeGrid() {

}


resetButton.addEventListener('click', () => {
    sizeInput = prompt('what size grid would you like', 16);
    if (sizeInput > 100) {
        sizeInput = prompt('please enter a number less than 100', 16)
    } else if (sizeInput === null) {
        makeGrid(16, 16);
        changeColor();
    } else {
        makeGrid(sizeInput, sizeInput);
        changeColor();
    }
});
buttonContainer.appendChild(resetButton);