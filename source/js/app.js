let mainNavList = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');

mainNavList.classList.remove('main-nav__list--nojs');
mainNavToggle.classList.remove('main-nav__toggle--nojs');

mainNavToggle.onclick = function() {
  mainNavList.classList.toggle('main-nav__list--open');
  mainNavToggle.classList.toggle('main-nav__toggle--open');
};


// let slider = document.querySelector(".slider__input");
// let image = document.querySelector(".slider__image");
// let divider = document.querySelector(".slider__divider");
// let x = 50'px';

// slider.oninput = ()=>{
//   let sliderVal = slider.value;
//   divider.style.left = sliderVal + 'px';
//   image.style.clip = "rect(0," + x + sliderVal + ", 90, " + x + sliderVal + ", 0)";
// }
