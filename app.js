"use strict";

const header = document.querySelector(".header");
const headerTop = document.querySelector(".header__top");
const nav = document.querySelector(".nav");

const aboutNavLink = document.querySelector(".about-link");
const aboutSection = document.querySelector(".about__section");

const iconContainer = document.querySelector(".hamburger__icon");

iconContainer.addEventListener("click", function (e) {
  this.classList.toggle("icon--bar");
});

headerTop.addEventListener("click", function (e) {
  nav.classList.toggle("toggle-nav");
});
////
aboutNavLink.addEventListener("click", function (e) {
  if (e.target.classList.contains("about-link")) {
    aboutSection.classList.toggle("toggle-about");

    // e.target.classList.toggle("nav__link-active");
    this.style.borderBottom = "2px solid";
  }
});
/// fetch project data with fect webAPI

const projectContainer = document.querySelector(".project__container");

const projectDisplayHandler = async function () {
  const getData = await fetch("./project_data.json");
  if (!getData.ok) {
    throw new Error(`HTTP Error warning , status ${getData.status} ${getData.statusText}`);
  }
  const data = await getData.json();

  data.map(dataContent => {
    const contentHTML = `
 <div class="project__content">
            <div class="project__content-details">
              <p class="project__title">${dataContent.project_title}</p>
              <p class="project__description">
               ${dataContent.project_description}
              </p>
              <button class="btn project__btn">View Project</button>
            </div>

            <div class="project__content-image">
              <img src="./Img/project_pics-${dataContent.id}.jpg" class="project__image" alt="${dataContent.project_image_alt}" />
            </div>
          </div>
    `;
    projectContainer.insertAdjacentHTML("beforeend", contentHTML);
  });
};

projectDisplayHandler();
