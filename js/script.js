const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger__line');
const menuLinks = document.querySelector('.menu-links');
const modal = document.getElementById('myModal');
const btn = document.querySelector('.button--explore');
const closeBtn = document.querySelector('.close-button');
const btn1 = document.querySelector('.button--readmore');
const btn2 = document.querySelector(".button--readmore");




function toggleMenu() {
  lines.forEach((line) => line.classList.toggle('active'));
  if (menuLinks) {
    menuLinks.classList.toggle('active');
  }
}

burger.addEventListener('click', toggleMenu);

btn.onclick = function () {
  modal.style.display = 'block';
}
closeBtn.onclick = function () {
  modal.style.display = 'none';
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
btn1.onclick = function () {
  modal.style.display = 'block';
}
closeBtn.onclick = function () {
  modal.style.display = 'none';
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
btn2.onclick = function () {
  modal.style.display = 'block';
}
closeBtn.onclick = function () {
  modal.style.display = 'none';
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}