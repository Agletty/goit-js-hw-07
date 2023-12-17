const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const newValue = nameInput.value.trim();
  nameOutput.textContent = newValue ? newValue : 'Anonymous';
});
