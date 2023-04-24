const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('#navbar');
menuBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('show');
})