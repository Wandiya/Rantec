
const navMenu = document.getElementById('menu-btn'),
navToggle = document.getElementById('active'),
navClose = document.getElementById('.menu')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('active')
    })
}
// document.addEventListener('click', function(event) {
// const target = event.target;
// if (target.classList.contains('menu-btn')) {
//   const menu = document.querySelector('.menu');
//   menu.classList.toggle('active');
// }
// });
// //     $('menu-btn').click(function() {
// // $('menu').toggleClass("active");
// // })