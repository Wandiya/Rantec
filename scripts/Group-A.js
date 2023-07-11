
  // Event listener for scanButton and qrCodeModal
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

  // Event listener for addButton and formContainer
  const addButton = document.getElementById('addButton');
  const formContainer = document.getElementById('formContainer');

  addButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
  });

  const closeButton = formContainer.querySelector('.close');
  closeButton.addEventListener('click', function() {
    formContainer.style.display = 'none';
  });

