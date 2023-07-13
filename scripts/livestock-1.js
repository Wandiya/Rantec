const openFormBtn = document.getElementById('open-form-btn');
const formPopup = document.getElementById('livestock-form');

openFormBtn.addEventListener('click', () => {
  if (formPopup.style.display === 'block') {
    formPopup.style.display = 'none';
  } else {
    formPopup.style.display = 'block';
  }
});


/* Dropdown Content */
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
    const profileImage = document.querySelector(".profile img");

    const reader = new FileReader();
    reader.onload = function() {
      profileImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
});


// const openFormBtn = document.getElementById('open-form-btn');
// const livestockForm = document.getElementById('livestock-form');

// openFormBtn.addEventListener('click', () => {
//   livestockForm.classList.toggle('show');
// });

// // const iNameElement = document.querySelector(".i-name");
// // const formElement = document.getElementById("livestock-form");

// // iNameElement.addEventListener("click", () => {
// //   formElement.classList.remove("hidden");

// //   const iName = document.querySelector('.i-name');
// // const livestockForm = document.getElementById('livestock-form');

// // iName.addEventListener('click', () => {
// //   livestockForm.classList.toggle('hidden');
// // });

// // });
