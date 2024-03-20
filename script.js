document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', function(){
        toggleMenu();
    })
})

function toggleMenu() {
    const navBarMenu = document.querySelector('.navbar-menu')
    navBarMenu.classList.toggle('show-menu')
}


// /* Menu burger */
// @media only screen and (max-width: 768px) {
//     .navbar-menu ul {
//         display: none;
//     }
    
//     .navbar-menu.show-menu ul {
//         display: flex;
//         flex-direction: column;
//         background-color: #ffffff;
//         position: absolute;
//         top: 100%;
//         left: 0;
//         width: 100%;
//         padding: 20px;
//         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//         z-index: 1000;
//     }

//     .navbar-menu.show-menu ul li {
//         margin-bottom: 10px;
//     }

//     .menu-icon {
//         display: block;
//         cursor: pointer;
//     }

//     .menu-line {
//         width: 25px;
//         height: 3px;
//         background-color: #000;
//         margin: 5px;
//     }
//}
