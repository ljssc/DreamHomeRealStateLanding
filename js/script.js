const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger__line');
const menuLinks = document.querySelector('.menu-links');

function toggleMenu() {
  lines.forEach((line) => line.classList.toggle('active'));
  if (menuLinks) {
    menuLinks.classList.toggle('active');
  }
}

burger.addEventListener('click', toggleMenu);