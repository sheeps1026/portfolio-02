"use strict";

// 모달창 나올 때 뒷배경 레이어
const bg = document.createElement("div");

// Section
const body = document.querySelector("body");
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
const headerAFeatrues = document.querySelector(".header-a__features");
const headerAServices = document.querySelector(".header-a__services");
const headerAContact = document.querySelector(".header-a__contact");
const headerAFaq = document.querySelector(".header-a__faq");
const menuBtn = document.querySelector(".menu-btn");
const signinBtn = document.querySelector(".signin-btn");

// Menu
const menuCloseBtn = document.querySelector(".menu-close-btn");
const menuBtnFeatures = document.querySelector(".menu-btn__features");
const menuBtnServices = document.querySelector(".menu-btn__services");
const menuBtnContact = document.querySelector(".menu-btn__contact");
const menuSigninBtn = document.querySelector(".menu-signin-btn");

// Landing

// Footer
const footerAFeatures = document.querySelector(".footer-a__features");
const footerAServices = document.querySelector(".footer-a__services");
const footerATestimonials = document.querySelector(".footer-a__testimonials");
const footerAContact = document.querySelector(".footer-a__contact");

// Arrow-up
const arrowBtn = document.querySelector(".arrow-btn");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

// Login-Modal
const loginModal = document.querySelector(".login-modal");
const loginModalClose = document.querySelector(".login-modal-close");

// header 섹션 버튼 클릭시 이동
headerAFeatrues.addEventListener("click", () => {
  features.scrollIntoView();
});

headerAServices.addEventListener("click", () => {
  services.scrollIntoView();
});

headerAContact.addEventListener("click", () => {
  contact.scrollIntoView();
});

headerAFaq.addEventListener("click", () => {
  footer.scrollIntoView();
});

// footer 섹션 버튼 클릭시 이동
footerAFeatures.addEventListener("click", () => {
  features.scrollIntoView();
});

footerAServices.addEventListener("click", () => {
  services.scrollIntoView();
});

footerATestimonials.addEventListener("click", () => {
  testimonials.scrollIntoView();
});

footerAContact.addEventListener("click", () => {
  contact.scrollIntoView();
});

// 메뉴 버튼
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.appendChild(bg);
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.removeChild(bg);
});

bg.style.position = "fixed";
bg.style.top = "0px";
bg.style.left = "0px";
bg.style.width = "100%";
bg.style.height = "100%";
bg.style.backgroundColor = "rgba(0, 0, 0, 0.4";
bg.style.overflow = "auto";
bg.style.zIndex = "98";

menuBtnFeatures.addEventListener("click", () => {
  features.scrollIntoView();
});

menuBtnServices.addEventListener("click", () => {
  services.scrollIntoView();
});

menuBtnContact.addEventListener("click", () => {
  contact.scrollIntoView();
});

menuSigninBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  loginModal.classList.add("active");
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

// services 슬라이더
const servicesFirstCard = document.querySelector(".services-card:first-child");
const CLASS_SERVICES_SHOWING = "services__showing";

// servicesFirstCard.classList.add(CLASS_SHOWING);

function servicesSlide() {
  const servicesCurrentSlide = document.querySelector(
    `.${CLASS_SERVICES_SHOWING}`
  );

  if (window.innerWidth < 992) {
    if (servicesCurrentSlide) {
      // servicesCurrentSlide를 찾으면 (2)
      servicesCurrentSlide.classList.remove(CLASS_SERVICES_SHOWING);
      const servicesNextSlide = servicesCurrentSlide.nextElementSibling;

      if (servicesNextSlide) {
        // (3)
        servicesNextSlide.classList.add(CLASS_SERVICES_SHOWING);
      } else {
        // 마지막 슬라이드면 첫 번째로 이동 (4)
        servicesFirstCard.classList.add(CLASS_SERVICES_SHOWING);
      }
    } else {
      // null이라서 .showing을 첫 번째 슬라이드로 올림 (1)
      servicesFirstCard.classList.add(CLASS_SERVICES_SHOWING);
    }
  }
}
servicesSlide();

setInterval(servicesSlide, 2000);

// testimonials 슬라이더
const testimonialsFirstCard = document.querySelector(
  ".testimonials-card:first-child"
);
const CLASS_TESTIMONIALS_SHOWING = "testimonials__showing";

function testimonialsSlide() {
  const testimonialsCurrentSlide = document.querySelector(
    `.${CLASS_TESTIMONIALS_SHOWING}`
  );

  if (window.innerWidth < 992) {
    if (testimonialsCurrentSlide) {
      testimonialsCurrentSlide.classList.remove(CLASS_TESTIMONIALS_SHOWING);
      const testimonialsNextSlide = testimonialsCurrentSlide.nextElementSibling;

      if (testimonialsNextSlide) {
        testimonialsNextSlide.classList.add(CLASS_TESTIMONIALS_SHOWING);
      } else {
        testimonialsFirstCard.classList.add(CLASS_TESTIMONIALS_SHOWING);
      }
    } else {
      testimonialsFirstCard.classList.add(CLASS_TESTIMONIALS_SHOWING);
    }
  }
}
testimonialsSlide();

setInterval(testimonialsSlide, 2000);

// Login-Modal 띄우기
signinBtn.addEventListener("click", () => {
  loginModal.classList.add("active");
  document.body.appendChild(bg);
});

loginModalClose.addEventListener("click", () => {
  loginModal.classList.remove("active");
  document.body.removeChild(bg);
});
