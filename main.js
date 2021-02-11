"use strict";

// Section
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const landing = document.querySelector(".landing");
const features = document.querySelector(".features");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const contact = document.querySelector(".contact");
const footer = document.querySelector(".footer");

// header
const featuresBtnHeader = document.querySelector(".features-button__header");
const servicesBtnHeader = document.querySelector(".services-button__header");
const contactBtnHeader = document.querySelector(".contact-button__header");
const faqBtnHeader = document.querySelector(".faq-button__header");

// menu
const closeBtn = document.querySelector(".close-button");

// landing
const menuBtn = document.querySelector(".menu-button");

// footer
const homeBtnFooter = document.querySelector(".home-button__footer");
const featuresBtnFooter = document.querySelector(".features-button__footer");
const servicesBtnFooter = document.querySelector(".services-button__footer");
const testimonialsBtnFooter = document.querySelector(
  ".testimonials-button__footer"
);

// header 버튼 클릭시 이동
featuresBtnHeader.addEventListener("click", () => {
  features.scrollIntoView();
});

servicesBtnHeader.addEventListener("click", () => {
  services.scrollIntoView();
});

contactBtnHeader.addEventListener("click", () => {
  contact.scrollIntoView();
});

faqBtnHeader.addEventListener("click", () => {
  footer.scrollIntoView();
});

// footer 버튼 클릭시 이동
homeBtnFooter.addEventListener("click", () => {
  header.scrollIntoView();
});

featuresBtnFooter.addEventListener("click", () => {
  features.scrollIntoView();
});

servicesBtnFooter.addEventListener("click", () => {
  services.scrollIntoView();
});

testimonialsBtnFooter.addEventListener("click", () => {
  testimonials.scrollIntoView();
});

// menuBtn.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });
