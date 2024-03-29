// Attendre que le contenu du DOM soit chargé avant d'exécuter le script.
document.addEventListener('DOMContentLoaded', function() {
    // Séléction des éléments dans le DOM
    const burgerMenu = document.querySelector('.burger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const searchBar = document.querySelector('.burger-menu-search-bar');
    const titleLogoImg = document.querySelector('.title-logo img'); 

    burgerMenu.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        searchBar.classList.toggle('active');

        if (navbarMenu.classList.contains('active')) {
            burgerMenu.classList.add('close');
            titleLogoImg.style.display = 'none'; // Ici je cache le logo une fois la navbar ouverte.
        } else {
            burgerMenu.classList.remove('close');
            titleLogoImg.style.display = ''; 
        }
    });
    
    // Ici j'utilise un écouteur d'événement pour fermer le menu lorsque l'utilisateur clique sur les bords de la barre de recherche.
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-menu, .burger-menu, .burger-menu-search-bar')) {
            navbarMenu.classList.remove('active');
            searchBar.classList.remove('active');
            burgerMenu.classList.remove('close');
            titleLogoImg.style.display = ''; 
        }
    });
});
