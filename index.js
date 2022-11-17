const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('.index-nav-mobile');

function toggleNav() {
  mobileMenu.classList.toggle('visible');
}

hamburger.addEventListener('click', toggleNav);
