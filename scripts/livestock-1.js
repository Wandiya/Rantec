const openFormBtn = document.getElementById('open-form-btn');
const formPopup = document.getElementById('livestock-form');

openFormBtn.addEventListener('click', () => {
  if (formPopup.style.display === 'block') {
    formPopup.style.display = 'none';
  } else {
    formPopup.style.display = 'block';
  }
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
