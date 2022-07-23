console.log('script.js is loaded ! ');

const navMenu = document.getElementById("navButton"); 
const expandMenu = document.getElementById("navBgr");
const solidMenu = document.getElementById("navSolid");
const activeIcon = document.getElementById("hamburger");


navMenu.addEventListener("click", activeMenu);

function activeMenu() {
    expandMenu.classList.toggle("navigation__background--active");
    solidMenu.classList.toggle("navigation__nav--active");
    activeIcon.classList.toggle("navigation__hamburger--active");
}

const navLink = document.querySelectorAll(".navigation__link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    expandMenu.classList.remove("navigation__background--active");
    solidMenu.classList.remove("navigation__nav--active");
    activeIcon.classList.remove("navigation__hamburger--active");
}