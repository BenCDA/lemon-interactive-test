document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    burgerMenu.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});