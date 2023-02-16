import './scss/normalize.scss';
import './scss/app.scss';
import Swiper from 'swiper';

var mySwiper = new Swiper('.mySwiper', {
  spaceBetween: 15,
  breakpoints: {
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
