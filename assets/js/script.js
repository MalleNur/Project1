/* Show Menu */
const navMenu = document.getElementById('navigation_menu'),
navToggle = document.getElementById('navigation_toggle'),
navClose = document.getElementById('navigation_close')

/* Menu show */
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show_menu')
})
}

/* Menu hidden */
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show_menu')
})
}