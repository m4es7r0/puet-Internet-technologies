import '../scss/app.scss';

/* Your JS Code goes here */

const header = document.getElementById('header');
const headerMenuButton = document.querySelector('.menu');
const headerMenuMobile = document.querySelector('.header-menu-mobile');
const headerMenuMobileOverlay = document.querySelector('.header-menu-mobile-overlay');

const video = document.getElementById('video');
const videoPlayButton = document.getElementById('video-play-button');

const formSubscribe = document.getElementById('subscribe-form');
const formSubscribeInput = document.querySelector('#subscribe-form input');

// sticky header
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 25);
});

// header menu
headerMenuButton.addEventListener('click', () => {
  headerMenuMobile.classList.toggle('open');
});

headerMenuMobile.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    headerMenuMobile.classList.remove('open');
  }
});

headerMenuMobile.addEventListener('transitionend', () => {
  if (headerMenuMobile.classList.contains('open')) {
    headerMenuMobileOverlay.style.zIndex = '5';
  } else {
    headerMenuMobileOverlay.style.zIndex = '-1';
  }
});

headerMenuMobileOverlay.addEventListener('click', () => {
  headerMenuMobile.classList.remove('open');
});

// video
videoPlayButton.addEventListener('click', () => {
  if (!videoPlayButton.classList.contains('first-click')) {
    videoPlayButton.classList.add('first-click');
  }

  if (video.paused) {
    videoPlayButton.classList.add('active');
    video.play();
  } else {
    videoPlayButton.classList.remove('active');
    video.pause();
  }
});

// form subscribe
formSubscribe.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formSubscribeInput.value) {
    window.alert(`Thank you ${formSubscribeInput.value} for subscribing!`);
  }
});
