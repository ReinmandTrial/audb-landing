import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';

import Swiper, { Autoplay, EffectCoverflow, Navigation, Thumbs } from 'swiper';

// Screen 5========================================================================================================================================================
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

// Screen 7========================================================================================================================================================
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

// Screen 14========================================================================================================================================================
const teamSliders = document.querySelector('#teamSlider .swiper-wrapper')
   ?.children?.length;

new Swiper('#teamSlider', {
   modules: [EffectCoverflow, Navigation],
   effect: 'coverflow',
   slidesPerView: 1,
   allowTouchMove: false,
   touchEventsTarget: 'wrapper',
   speed: 1000,
   nested: true,
   initialSlide: teamSliders,
   coverflowEffect: {
      rotate: 0,
      depth: calcDepth(),
      slideShadows: false,
      stretch: calcStretch(),
   },
   slideToClickedSlide: true,
   direction: 'vertical',
   navigation: {
      prevEl: '.section-14__btn_next',
      nextEl: '.section-14__btn_prev',
   },
});

function calcDepth() {
   const width = window.innerWidth;
   if (width > 991) return 100;
   if (width > 0) return 100;
}

function calcStretch() {
   const width = window.innerWidth;
   if (width > 991) return 550;
   if (width > 0) return 750;
}

// Screen 15========================================================================================================================================================
