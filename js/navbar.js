const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu');
const phone = document.querySelector('.phone');
const search = document.querySelector('.search-btn');
const searchCloseIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.header-search-input');
const dropdown = document.querySelector('.dropdown');
const submenu = document.querySelector('.submenu');

window.addEventListener('click', (e) => {
  
  // Check if clicked on submenu
  if (submenu.contains(e.target)) {
    return;
  } // Check if clicked on menu button 
  else if (dropdown.contains(e.target)) {
    submenu.classList.toggle('closed');
  } // Clicked on another place.
  else {
    submenu.setAttribute('class', 'submenu closed');
  }
});

// Listener for menu button
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
  phone.classList.toggle('hide');
});

// Listener for search button click
search.addEventListener('click', () => {
  searchInput.classList.toggle('hide');

  if (searchCloseIcon.classList[0] == 'search-icon') {
    searchCloseIcon.classList.remove('search-icon');
    searchCloseIcon.classList.add('close-icon');
  }
  else {
    searchCloseIcon.classList.remove('close-icon');
    searchCloseIcon.classList.add('search-icon');
  }
});