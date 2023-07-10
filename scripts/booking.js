
const navMenu = document.getElementById('menu-btn');
const navToggle = document.getElementById('active');
const navClose = document.getElementById('menu');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}