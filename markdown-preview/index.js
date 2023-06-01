const container = document.getElementById('container');
const contentHere = document.getElementById('content');
const sourceArea = document.getElementById('source');
const devider = document.getElementById('devider');

sourceArea.addEventListener('keyup', () => {
    const newText = marked.parse(sourceArea.value);
    contentHere.innerHTML = newText;
});

const onMouseMove = (event) => {
    const { left, width } = container.getBoundingClientRect();
    const { clientX } = event;

    sourceArea.style.width = `${clientX - left}px`;
    contentHere.style.width = `${left + width - clientX}px`;
};

const onMouseUp = (event) => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};

const onMouseDown = (event) => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};

devider.addEventListener('mousedown', onMouseDown);
