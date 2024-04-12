import '../scss/app.scss';

/* Your JS Code goes here */

const header = document.getElementById('header');
const video = document.getElementById('video');
const videoPlayButton = document.getElementById('video-play-button');
const formSubscribe = document.getElementById('subscribe-form');
const formSubscribeInput = document.querySelector('#subscribe-form input');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 25);
});

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

formSubscribe.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formSubscribeInput.value) {
    window.alert(`Thank you ${formSubscribeInput.value} for subscribing!`);
  }
});
