const input = document.querySelector('#password');
const btn = document.querySelector('.show-btn');

btn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    if (e.currentTarget.classList.contains('active')){
        input.type = 'text';
    } else{
        input.type = 'password'
    }
    input.focus();
})