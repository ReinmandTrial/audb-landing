import '../scss/style.scss';
import './modules.js';
import './watcher.js';

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   lerp: 0.07,
});
