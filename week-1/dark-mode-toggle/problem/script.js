const slider = document.querySelector('.slider');

slider.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
})