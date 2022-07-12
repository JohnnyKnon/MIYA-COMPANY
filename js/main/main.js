'use strict';

const PREVIEW_WORD = document.querySelector('.preview-title');

// Scroll event

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  if (scrollValue >= 0) {
    let i = (scrollValue * -2) / 3;
    PREVIEW_WORD.style.transform = 'translateX(' + i + 'px)';
  }
});
