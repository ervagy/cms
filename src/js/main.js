import * as MainNav from "./lib/mainnav.js";
window.MainNav = MainNav;

//button
const menuBtn = document.querySelector(".hamburger");
const hamburgerLine1 = document.querySelector(".hamburger_line1");
const hamburgerLine2 = document.querySelector(".hamburger_line2");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburgerLine1.classList.add("open");
    hamburgerLine2.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburgerLine1.classList.remove("open");
    hamburgerLine2.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
