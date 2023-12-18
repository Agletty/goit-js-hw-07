function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
function createBoxes(amount) {
  const boxes = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }
    boxesContainer.innerHTML = '';
    boxesContainer.append(...boxes);
    input.value = '';
  }
}

btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
