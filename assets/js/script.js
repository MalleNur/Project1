/* Show Menu */
const navigationMenu = document.getElementById('navigation_menu'),
navigationToggle = document.getElementById('navigation_toggle'),
navigationClose = document.getElementById('navigation_close')

/* Menu show */
/* Validate if constant exists */
if(navigationToggle){
navigationToggle.addEventListener('click', () =>{
  navigationMenu.classList.add('show_menu')
})
}

/* Menu hidden */
/* Validate if constant exists */
if(navigationClose){
navigationClose.addEventListener('click', () =>{
  navigationMenu.classList.remove('show_menu')
})
}