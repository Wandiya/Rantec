
  /**===========================  Event listener for scanButton and qrCodeModal =================== ******/
  document.getElementById("scanButton").addEventListener("click", function() {
    const modal = document.getElementById("qrCodeModal");
    const qrCodeImage = document.getElementById("qrCodeImage");
    qrCodeImage.src = "images/qrCode.png";
    modal.style.display = "block";
  });

  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    const modal = document.getElementById("qrCodeModal");
    modal.style.display = "none";
  });

  /*========================Event listener for addButton and formContainerm=====================*/
  const addButton = document.getElementById('addButton');
  const formContainer = document.getElementById('formContainer');

  addButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
  });

  const closeButton = formContainer.querySelector('.close');
  closeButton.addEventListener('click', function() {
    formContainer.style.display = 'none';
  });

  /*************************** Dropdown Content **********************/

document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.querySelector(".profile-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function() {
    dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
      dropdownContent.style.display = "none";
    }
  });
});

  document.addEventListener("DOMContentLoaded", function() {
  const editLink = document.querySelector(".edit");
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


