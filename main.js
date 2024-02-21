const menuBtn = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('nav');

const submitBtn = document.querySelector('#submit-button');
const inputs = document.querySelectorAll('.input');
const required = document.querySelectorAll('.required');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})

submitBtn.addEventListener('click', () => {
    inputs.forEach((input, el) => {
        if (input.value === "") {
            input.classList.add('incorrect');
            console.log('clicked')
        } else {
            input.classList.remove('incorrect');
        };

        if (input.value === "" && required[el]) {
            required[el].classList.add('flag');
        } else {
            required[el].classList.remove('flag');
        }
    })
})
