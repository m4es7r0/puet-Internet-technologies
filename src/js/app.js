import '../scss/app.scss';

/* Your JS Code goes here */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 25);
});
