const gridContainer = document.querySelector('#grid-container');

function createDivs(size) {
    for(let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.setAttribute('style', 'border: 1px solid red;');
        gridContainer.appendChild(column);
    }
    for(let j = 0; j < size; j++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', 'border: 1px solid blue;');    
        gridContainer.appendChild(row);  
    }
}
createDivs(10);