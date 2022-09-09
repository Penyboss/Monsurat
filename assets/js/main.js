/**
 * * /==================/ HAMBURGER && SIDEBAR /===============/
**/
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.over_lay');
const headerLink = document.querySelectorAll('.nav_link');
const navbar = document.querySelector('.nav_bar');
let sideControls = [overlay, hamburger];

sideControls.forEach(sideControl => {
  sideControl.addEventListener('click', () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

headerLink.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
  });
});