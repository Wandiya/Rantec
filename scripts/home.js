
  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const asideBar = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
      asideBar.classList.toggle('active');
    });
  });
