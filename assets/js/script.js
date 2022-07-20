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

/* Remove menu in mobile */

const navigationLink = document.querySelectorAll('.navigation_link')

function linkAction(){
    const navigationMenu = document.getElementById('navigation_menu')
    // When we click on each navigation_link, we remove the show_menu class
    navigationMenu.classList.remove('show_menu')
}
navigationLink.forEach(n => n.addEventListener('click', linkAction))