export function mobileMenu() {
  const burgerBtn = document.querySelector('.header_open-menu-btn');
  const mobileMenu = document.querySelector('.header_mobile-menu');
  const burgerLines = document.querySelectorAll('.burger-line');

  burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-open');
    burgerLines[0].classList.toggle('first');
    burgerLines[1].classList.toggle('middle');
    burgerLines[2].classList.toggle('last');
  });
}

// const body = document.querySelector('body')
// const darkModeBtn = document.querySelector('#header_darkmode-toggle')

// darkModeBtn.addEventListener('click', function() {
//     body.classList.toggle('dark-mode-on')
// })
