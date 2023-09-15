let mainNavList = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');

mainNavList.classList.remove('main-nav__list--nojs');
mainNavToggle.classList.remove('main-nav__toggle--nojs');

mainNavToggle.onclick = function() {
  mainNavList.classList.toggle('main-nav__list--open');
  mainNavToggle.classList.toggle('main-nav__toggle--open');
};


// let slider = document.querySelector(".slider__input");
// let imageBefore = document.querySelector(".slider__image--before");
// let imageAfter = document.querySelector(".slider__image--after");
// let divider = document.querySelector(".slider__divider");

// slider.oninput = ()=>{
//   let sliderVal = slider.value;
//   divider.style.left = sliderVal + '%';
//   imageBefore.style.clip = "rect(0, " + sliderVal + " '%', auto, 0)";
// }
