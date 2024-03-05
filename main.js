document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('nav');

    const plusDiv = document.querySelectorAll('.plus-btn');
    const cardback = document.querySelectorAll('.card-back');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });

    plusDiv.forEach((plus, el) => {
        plus.addEventListener('click', () => {
            plus.classList.toggle('is-active');
            cardback[el].classList.toggle('card-back-active');
        });
    });
});