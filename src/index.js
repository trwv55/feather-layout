import './scss/normalize.scss';
import './scss/app.scss';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
