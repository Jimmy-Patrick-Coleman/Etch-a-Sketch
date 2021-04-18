const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 256; i++) {
const div = document.createElement('div');
div.classList.add('div');
gridContainer.appendChild(div);
}