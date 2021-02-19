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

// header 섹션 버튼 클릭시 이동
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

// footer 섹션 버튼 클릭시 이동
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

arrowUp.addEventListener("click", () => {
  landing.scrollIntoView();
});

arrowDown.addEventListener("click", () => {
  footer.scrollIntoView();
});

// 슬라이더
const CLASS_SHOWING = "showing";
const servicesFirstCard = document.querySelector(".services-card:first-child");

// servicesFirstCard.classList.add(CLASS_SHOWING);

function slide() {
  const currentSlide = document.querySelector(`.${CLASS_SHOWING}`);

  if (window.innerWidth < 992) {
    if (currentSlide) {
      // currentSlide를 찾으면 (2)
      currentSlide.classList.remove(CLASS_SHOWING);
      const nextSlide = currentSlide.nextElementSibling;

      if (nextSlide) {
        nextSlide.classList.add(CLASS_SHOWING);
      } else {
        // 마지막 슬라이드면 첫 번째로 이동
        servicesFirstCard.classList.add(CLASS_SHOWING);
      }
    } else {
      // null이라서 .showing을 첫 번째 슬라이드로 올림 (1)
      servicesFirstCard.classList.add(CLASS_SHOWING);
    }
  }
}
slide();

setInterval(slide, 2000);
