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

const landingHeight = landing.getBoundingClientRect().height;

// Header
const featuresBtnHeader = document.querySelector(".features-button__header");
const servicesBtnHeader = document.querySelector(".services-button__header");
const contactBtnHeader = document.querySelector(".contact-button__header");
const faqBtnHeader = document.querySelector(".faq-button__header");

// Menu
const closeBtn = document.querySelector(".close-button");

// Landing
const menuBtn = document.querySelector(".menu-button");

// Footer
const homeBtnFooter = document.querySelector(".home-button__footer");
const featuresBtnFooter = document.querySelector(".features-button__footer");
const servicesBtnFooter = document.querySelector(".services-button__footer");
const testimonialsBtnFooter = document.querySelector(
  ".testimonials-button__footer"
);

// Arrow-up
const arrowBtn = document.querySelector(".arrow-btn");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

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

// 메뉴 버튼
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// 스크롤 내렸을 때 arrow-btn 보이게
document.addEventListener("scroll", () => {
  if (window.scrollY > landingHeight / 2) {
    arrowBtn.classList.add("active");
  } else {
    arrowBtn.classList.remove("active");
  }
});

// arrow-up 버튼 클릭하면 landing으로
arrowUp.addEventListener("click", () => {
  landing.scrollIntoView();
});

// arrow-down 버튼 클릭하면 footer로
arrowDown.addEventListener("click", () => {
  footer.scrollIntoView();
});
