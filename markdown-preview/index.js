const container = document.getElementById('container');
const contentHere = document.getElementById('content');
const markupArea = document.getElementById('markup');
const devider = document.getElementById('devider');

markupArea.addEventListener('keyup', () => {
    const newText = marked.parse(markupArea.value);
    contentHere.innerHTML = newText;
});

const onMouseMove = (event) => {
    const { width } = body.getBoundingClientRect();
    const { clientX } = event;

    markupArea.style.width = `${clientX - 4}px`;
    contentHere.style.width = `${width - clientX - 4}px`;
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