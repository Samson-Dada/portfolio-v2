"use strict";
const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menu-icon");

const nav = document.querySelector(".nav");

const aboutNavLink = document.querySelector(".about-link");
const aboutSection = document.querySelector(".about__section");

menuIcon.addEventListener("click", function (e) {
  nav.classList.toggle("toggle-nav");
});
aboutNavLink.addEventListener("click", function (e) {
  if (e.target.classList.contains("about-link")) {
    aboutSection.classList.toggle("toggle-about");

    // e.target.classList.toggle("nav__link-active");
    aboutNavLink.style.borderBottom = "2px solid";
  }
});
