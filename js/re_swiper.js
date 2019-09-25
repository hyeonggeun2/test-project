// 2번째 스크립트
var Sswiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// 1번째 스크립트
var swiper = new Swiper('.s-swiper-container', {
  slidesPerView: 2,
  spaceBetween: 20,
  // init: false,
  loop: true,
  pagination: {
    el: '.s-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-swiper-button-next',
    prevEl: '.s-swiper-button-prev',
  },
  breakpoints: {
    // 600: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 10,      
    },
  }
});