/**
 * * /==================/ NAV CONTROL && SIDEBAR /===============/
**/
const nav_control = document.querySelector('.nav_control');
const headerLink = document.querySelectorAll('.nav_link');
const navbar = document.querySelector('.nav_bar');
const body = document.querySelector('body');

nav_control.addEventListener('click', () => {
  navbar.classList.toggle('active');
  nav_control.classList.toggle('active');
  if (nav_control.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflowY = 'scroll';
  }
});

headerLink.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    nav_control.classList.remove('active');
    body.style.overflowY = 'scroll';
  });
});

/**
 * *  /==================/  PORTFOLIO FILTER /===============/
**/
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
  filter.addEventListener('click', function () {
    for (const iterator of filters) {
      iterator.classList.remove('active');
    }
    this.classList.add('active');
  });
});
/**
 * *  /==================/ SCROLL ANIMATION /===============/
 **/

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const headerTheme = document.querySelector('[name="theme-color"]');
  const toTop = document.querySelector('.to_top');
  if (window.scrollY > 20) {
    header.classList.add('active');
    headerTheme.setAttribute('content', 'var(--pri-color)');
    toTop.classList.add('active');
  } else {
    header.classList.remove('active');
    headerTheme.setAttribute('content', 'var(--bck-color)');
    toTop.classList.remove('active');
  }

  // */==================/ TO TOP /===============/
  if (window.scrollY > 600) {
    toTop.classList.add('active');

  } else {
    toTop.classList.remove('active');
  }

  // */==================/ SCROLL INDICATOR /===============/
  const sections = document.querySelectorAll('.indicate');
  let scrollHeight = window.scrollY;
  let secLength = sections.length;

  while (--secLength && scrollHeight + 61 < sections[secLength].offsetTop) {
  }
  headerLink.forEach(i => i.classList.remove('active'));
  headerLink[secLength].classList.add('active');

});

/**
 * *  /==================/ Type Animation /===============/
**/

/**
 * *  /==================/ Scroll Reveal Animation /===============/
**/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1500,
  delay: 50,
  reset: false
});

sr.reveal(' .home_content, .about_image, .about_details, .accomplishments_container, .skills, .testimonials_container', {});
sr.reveal(' .home_subtile, .home_title, .home_intro, .button , .about_title, .about_text, .accomplishment, .skill, .portfolio, .blog, .social_link_container, .input_container, .home_social_link, .about_service ,.about_lists   ', { interval: 200 });



