/**
 * ? /================/HEADER SECTION/============/
**/

const hamburger = document.querySelector('.hamburger');
const hamburgerDiv = document.querySelector('.hamburger div');
const navbar = document.querySelector('#navbar');
const headerEl = document.querySelector('#head');
const bodyEl = document.querySelector('html');
const overlay = document.querySelector('.overlay');
const logo2 = document.querySelector('.logo-2');
const navLink = document.querySelectorAll('.nav-link');
const controls = [hamburger, overlay, logo2];

controls.forEach(function (param) {
  param.addEventListener('click', () => {
    hamburgerDiv.classList.toggle('active');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (overlay.classList[1]) {
      bodyEl.style.overflowY = 'hidden';
    } else {
      bodyEl.style.overflowY = '';
    }
  });
});

for (const link of navLink) {
  link.addEventListener('click', () => {
    hamburgerDiv.classList.remove('active');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    bodyEl.style.overflowY = 'auto';

  });
}
/**
 * * /==================/TYPED EFFECT/===============/
**/

/**
 * * /==================/SCROLL EFFECT/===============/
**/


window.onscroll = function () {
  if (window.scrollY > 20) {
    headerEl.classList.add('active');
  } else {
    headerEl.classList.remove('active');
  }
};