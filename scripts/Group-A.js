document.getElementById("scanButton").addEventListener("click", function() {
  var modal = document.getElementById("qrCodeModal");
  var qrCodeImage = document.getElementById("qrCodeImage");
  qrCodeImage.src = "path/to/your/qr-code-image.png";
  modal.style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  var modal = document.getElementById("qrCodeModal");
  modal.style.display = "none";
});