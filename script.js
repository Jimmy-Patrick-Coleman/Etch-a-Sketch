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
makeGrid(10, 10);