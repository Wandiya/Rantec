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