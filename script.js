document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const searchBar = document.querySelector('.burger-menu-search-bar');

    burgerMenu.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        searchBar.classList.toggle('active');
        
        if (navbarMenu.classList.contains('active')) {
            burgerMenu.classList.add('close');
        } else {
            burgerMenu.classList.remove('close');
        }
    });
    
    document.addEventListener('click', function(event) {
        if (!navbarMenu.contains(event.target) && !burgerMenu.contains(event.target) && !searchBar.contains(event.target)) {
            navbarMenu.classList.remove('active');
            searchBar.classList.remove('active');
            burgerMenu.classList.remove('close');
        }
    });
    
});
