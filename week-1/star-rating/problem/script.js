const stars = document.querySelectorAll('.star-checkbox');
const checkboxes = document.querySelectorAll('.star-checkbox input[type="checkbox"]');
const submit = document.querySelector('#submit-stars');
submit.classList.add('disabled');
checkboxes.forEach(cb => {
    cb.addEventListener('click', event => {
        stars.forEach(star => {
            star.classList.remove('active');
        })
        console.log(stars);
        if (event.currentTarget.checked){
            colorStars(event.currentTarget.id);
            console.log(stars);
        }
        if (submit.classList.contains('disabled')){
            submit.classList.remove('disabled');
        }

    })
})

const colorStars = (selectedInt) => {
    for(let i = 0; i < selectedInt; i++){
        stars[i].classList.add('active');
    }
}