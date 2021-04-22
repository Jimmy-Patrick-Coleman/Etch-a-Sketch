const gridContainer = document.querySelector('#grid-container');

function createDivs(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('div');  
            gridContainer.appendChild(div);
        }
        const div = document.createElement('div');
        div.classList.add('div');  
        gridContainer.appendChild(div);
    }
   
}
createDivs(10);