
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


/*************************** Dropdown Content **********************/
document.addEventListener("DOMContentLoaded", function() {
  const editLink = document.querySelector(".edit-picture");
  const fileInput = document.createElement("input");
  fileInput.type = "file";

  editLink.addEventListener("click", function(event) {
    event.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", function() {
    const file = fileInput.files[0];
    const profileImage = document.querySelector(".profile-btn img");

    // Perform file upload logic here
    // You can use AJAX or other methods to upload the file to the server

    // For demonstration purposes, update the profile image source with the selected file
    const reader = new FileReader();
    reader.onload = function() {
      profileImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
});

  
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