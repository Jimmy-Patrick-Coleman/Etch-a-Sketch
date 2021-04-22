const grid = document.querySelector('#grid-container');
 
function makeGrid(col, row) {
for (let i = 0; i < (col * row); i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    grid.appendChild(div);
}
}
makeGrid(16, 16);