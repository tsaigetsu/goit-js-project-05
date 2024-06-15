export function mobileMenu() {
  const burgerBtn = document.querySelector('.header_open-menu-btn');
  const mobileMenu = document.querySelector('.header_mobile-menu');
  const burgerLines = document.querySelectorAll('.burger-line');

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    burgerLines[0].classList.remove('first');
    burgerLines[1].classList.remove('middle');
    burgerLines[2].classList.remove('last');
    document.body.classList.remove('header_overflow-hidden');
  }

  burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-open');
    burgerLines[0].classList.toggle('first');
    burgerLines[1].classList.toggle('middle');
    burgerLines[2].classList.toggle('last');
    document.body.classList.toggle('header_overflow-hidden')
  });

  mobileMenu.addEventListener('click', function (event) {
    if (event.target.classList.contains('header_mobile-menu_nav-link')) {
      event.preventDefault();
      
      const targetSectionId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetSectionId);

      if (targetSection) {
        closeMenu();
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
}
