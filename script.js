const buttonContainer = document.querySelector('#button-container')
const creationButton = document.createElement('button');
creationButton.textContent = 'Create a grid';
creationButton.classList.add('creationButton');

const resetButton = document.createElement('button');
resetButton.textContent = 'reset the grid';
resetButton.classList.add('resetButton');

const blackButton = document.createElement('button');
blackButton.textContent = 'Black Boxes';
blackButton.classList.add('blackButton');


const rainbowButton = document.createElement('button');
rainbowButton.textContent = 'Rainbow Boxes';
rainbowButton.classList.add('rainbowButton');


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


function makeBoxesARainbow() {
    const divs = grid.querySelectorAll('.div')
    divs.forEach(div => div.addEventListener('mouseover', () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
          div.style.backgroundColor = "#" + randomColor;
    }))
}

function makeBoxesBlack() {
    const divs = grid.querySelectorAll('.div')
    divs.forEach(div => div.addEventListener('mouseover', () => {
          div.style.backgroundColor = "#36454F";
    }))
}


function resetFunc() {
    location.reload(); 
}


resetButton.addEventListener('click', () => {
    inCaseOfMissclick = prompt('Are you sure you want to reset the grid', 'yes or no');
    answer = inCaseOfMissclick.toLowerCase();
    if (answer === 'yes') {
        resetFunc();
    }
});
buttonContainer.appendChild(resetButton);

creationButton.addEventListener('click', () => {
    sizeInput = prompt('what size grid would you like', 16);
    a = sizeInput;
    b = a;
    if (sizeInput > 100) {
        sizeInput = prompt('please enter a number less than 100', 16)
    } else if (sizeInput === null) {
        makeGrid(16, 16);
        changeColor();
    } else {
        makeGrid(a, b);
        changeColor();
    }
});
buttonContainer.appendChild(creationButton);




rainbowButton.addEventListener('click', () => {
    makeBoxesARainbow();
});
buttonContainer.appendChild(rainbowButton);

blackButton.addEventListener('click', () => {
    makeBoxesBlack()
});
buttonContainer.appendChild( blackButton);