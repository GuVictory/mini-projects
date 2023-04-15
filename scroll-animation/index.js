const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  const triggerPoint = (window.innerHeight / 8) * 7;

  for (const box of boxes) {
    const topOfBox = box.getBoundingClientRect().top;
    if (topOfBox < triggerPoint) {
      box.classList.add('show');
    } else if (box.classList.contains('show')) {
      box.classList.remove('show');
    }
  }
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);
