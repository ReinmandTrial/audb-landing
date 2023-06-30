import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';

import Swiper, {
   Autoplay,
   EffectCoverflow,
   FreeMode,
   Navigation,
   Thumbs,
} from 'swiper';

// Screen 5
new Swiper('#swiper5', {
   modules: [Navigation, EffectCoverflow, Thumbs, Autoplay],
   spaceBetween: 20,
   slidesPerView: 1,
   speed: 1300,
   grabCursor: true,
   //    loop: true,
   //    autoplay: {
   //       delay: 3000,
   //    },
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 150,
      slideShadows: false,
   },
   navigation: {
      prevEl: '.section-5__prev-btn',
      nextEl: '.section-5__next-btn',
   },
   thumbs: {
      swiper: {
         el: '#trumbs5',
         direction: 'vertical',
         speed: 1500,
         slidesPerView: 1,
      },
   },
});

// Screen 7
new Swiper('#swiper7l', {
   spaceBetween: 20,
   watchOverflow: true,
   breakpoints: {
      0: {
         slidesPerView: 1,
         centeredSlides: true,
      },
      767: {
         slidesPerView: 2.2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

new Swiper('#swiper7r', {
   spaceBetween: 20,
   watchOverflow: true,

   breakpoints: {
      0: {
         slidesPerView: 1,
         centeredSlides: true,
      },
      767: {
         slidesPerView: 2.2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

// screen 14
new Swiper('.mySwiper', {
   effect: 'cards',
   cardsEffect: {
      perSlideOffset: 10,
      perSlideRotate: 0,
      rotate: false,
   },
   direction: 'vertical',
   slideToClickedSlide: true,
});
