const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu');
 
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});
