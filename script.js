const openBtn = document.querySelector('.button_container');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.red');

container.classList.add('hidden');
openBtn.classList.add('visible');

openBtn.addEventListener('click', () => {
    container.classList.remove('hidden');
    container.classList.add('visible');

    openBtn.classList.remove('visible');
    openBtn.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
    container.classList.remove('visible');
    container.classList.add('hidden');

    openBtn.classList.remove('hidden');
    openBtn.classList.add('visible');
});