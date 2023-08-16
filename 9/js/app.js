let mainNavList = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');

mainNavToggle.onclick = function() {
  mainNavList.classList.toggle('main-nav__list--close');
  mainNavToggle.classList.toggle('main-nav__toggle--open');
};
