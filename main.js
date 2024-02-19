const menuBtn = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})
