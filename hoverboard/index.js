const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#2ecc71', '#3498db', '#e67e22'];

const NUMBER_OF_BOXES = 500;

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.background = '#dadada';
  element.style.boxShadow = '2px 2px 2px rgba(0, 0, 0, 0.3)';
};

for (let i = 0; i < NUMBER_OF_BOXES; ++i) {
  const box = document.createElement('div');
  box.classList.add('box');

  box.addEventListener('mouseover', () => setColor(box));
  box.addEventListener('mouseout', () => removeColor(box));
  container.appendChild(box);
}
