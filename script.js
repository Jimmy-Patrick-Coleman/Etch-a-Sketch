const buttonContainer = document.querySelector('#button-container')
const blueBtn = document.createElement('button');

const gridContainer = document.querySelector('#grid-container');
function createDivs(size) {
    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div).classList.add('div'); ;
    }
   
}
createDivs(10);

function makeBlue() {
const divs = gridContainer.querySelectorAll('.div');
blueBtn.textContent = 'blue';
blueBtn.addEventListener('click', () => {
  divs.forEach(div => div.addEventListener('mouseover', () => {
    div.setAttribute('style', 'color: blue; background: white'); 
}))

})
buttonContainer.appendChild(blueBtn);
}
makeBlue();