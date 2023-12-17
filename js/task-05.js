function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const buttonColor = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
});
