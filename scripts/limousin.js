// Get the elements
const addNumberBtn = document.getElementById('add-number-btn');
const formPopup = document.getElementById('number-form');

// Add event listener to the button
addNumberBtn.addEventListener('click', () => {
  formPopup.style.display = 'block'; // Show the form pop-up
});

// Close the form when the "Close" button is clicked
document.getElementById('close-btn').addEventListener('click', () => {
  formPopup.style.display = 'none'; // Hide the form pop-up
});

// Submit the form when the "Submit" button is clicked
document.getElementById('submit-btn').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission (for demo purposes)
  
  // Get the input values
  const sex = document.getElementById('sex-input').value;
  const id = document.getElementById('id-input').value;
  
  // Perform further processing or submit the form data
  
  // Reset the form
  document.getElementById('number-form').reset();
  formPopup.style.display = 'none'; // Hide the form pop-up
});

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
