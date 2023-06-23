import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';

import Swiper, { Autoplay, EffectCoverflow, Navigation, Thumbs } from 'swiper';

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
