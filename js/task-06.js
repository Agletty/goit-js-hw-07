function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  amount = input.value;

  if (amount < 1 || amount > 100) {
    return (boxes.innerHTML = '');
  }
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }
  console.log(boxes);
  boxesContainer.append(...boxes);

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// const boxesContainer = document.getElementById('boxes');
// const input = document.querySelector('input');
// const btnCreate = document.querySelector('[data-create]');
// const btnDestroy = document.querySelector('[data-destroy]');

// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   if (amount > 1 && amount < 100) {
//     const boxes = [];
//     amount = input.value;

//     for (let i = 1; i <= amount; i += 1) {
//       const box = document.createElement('div');
//       box.style.width = `${30 + i * 10}px`;
//       box.style.height = `${30 + i * 10}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxes.push(box);
//     }
//     console.log(boxes);
//     boxesContainer.append(...boxes);
//     input.value = '';
//   } // boxesContainer.innerHTML = boxes.join('');
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = '';
// }
