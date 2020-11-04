"use strict";

var svgPath = document.querySelectorAll('.path');
var svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 700,
  delay: function delay(el, i) {
    return i * 500;
  }
});