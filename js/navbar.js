const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu');
const phone = document.querySelector('.phone')
const search = document.querySelector('.search-btn');
const searchCloseIcon = document.querySelector('.search-icon')
const searchInput = document.querySelector('.header-search-input')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
  phone.classList.toggle('hide')
});


search.addEventListener('click', () => {
  console.log("clicked")
  searchInput.classList.toggle('hide')
  if (searchCloseIcon.classList[0] == "search-icon") {
    searchCloseIcon.classList.remove("search-icon")
    searchCloseIcon.classList.add("close-icon")
  }
  else {
    searchCloseIcon.classList.remove("close-icon")
    searchCloseIcon.classList.add("search-icon")
  }
})