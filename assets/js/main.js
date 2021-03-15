"use strict";

let index = 0;

// 모달창 나올 때 뒷배경 레이어
const modalOverlay = document.createElement("div");

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
const signinBtn = document.querySelector(".signin-button");

// Menu
const menuCloseBtn = document.querySelector(".menu-close-btn");
const menuBtnFeatures = document.querySelector(".menu-btn__features");
const menuBtnServices = document.querySelector(".menu-btn__services");
const menuBtnContact = document.querySelector(".menu-btn__contact");
const menuSigninBtn = document.querySelector(".menu-signin-button");

// Landing

// Services
const servicesCards = document.querySelectorAll(".services-card");

const servicesIndicators = document.querySelectorAll(".services-indicator");

// Testimonials
const testimonialsFirstCard = document.querySelector(
  ".testimonials-card:first-child"
);
const testimonialsLastCard = document.querySelector(
  ".testimonials-card:last-child"
);
const testimonialsBtnPrev = document.querySelector(".testimonials-button.prev");
const testimonialsBtnNext = document.querySelector(".testimonials-button.next");

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
  document.body.appendChild(modalOverlay);
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.removeChild(modalOverlay);
});

modalOverlay.style.position = "fixed";
modalOverlay.style.top = "0px";
modalOverlay.style.left = "0px";
modalOverlay.style.width = "100%";
modalOverlay.style.height = "100%";
modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.4";
modalOverlay.style.overflow = "auto";
modalOverlay.style.zIndex = "98";

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
for (let i = 0; i < servicesCards.length; i++) {
  if (servicesCards[i].classList.contains("showing")) {
    index = i;
  }
}

function navDots() {
  let num;

  for (let i = 0; i < servicesIndicators.length; i++) {
    servicesCards[i].classList.remove("showing");
    servicesIndicators[i].classList.remove("showing");
  }

  this.classList.add("showing");

  for (let i = 0; i < servicesIndicators.length; i++) {
    if (servicesIndicators[i].classList.contains("showing")) {
      num = i;
    }
  }
  servicesCards[num].classList.add("showing");
  index = num;
}

servicesIndicators.forEach((e) => {
  e.onclick = navDots;
});

// testimonials 슬라이더
const CLASS_TESTIMONIALS_SHOWING = "testimonials__showing";

function testimonialsLeftMove() {
  const currentSlide = document.querySelector(`.${CLASS_TESTIMONIALS_SHOWING}`);

  if (window.innerWidth < 992) {
    if (currentSlide) {
      // 현재 showing 클래스가 있는 요소에 showing 클래스를 없앤다
      currentSlide.classList.remove(CLASS_TESTIMONIALS_SHOWING);
      // 현재 showing 클래스의 이전 요소를 변수에 담는다
      const prevSlide = currentSlide.previousElementSibling;

      if (prevSlide) {
        prevSlide.classList.add(CLASS_TESTIMONIALS_SHOWING);
      } else {
        // preSlide 변수에 담았던 이전 요소가 있을 시, 그 요소에 showing 클래스 부여
        testimonialsLastCard.classList.add(CLASS_TESTIMONIALS_SHOWING);
      }
    } else {
      testimonialsLastCard.classList.add(CLASS_TESTIMONIALS_SHOWING);
    }
  }
}

function testimonialsRightMove() {
  const currentSlide = document.querySelector(`.${CLASS_TESTIMONIALS_SHOWING}`);

  if (window.innerWidth < 992) {
    if (currentSlide) {
      currentSlide.classList.remove(CLASS_TESTIMONIALS_SHOWING);
      const nextSlide = currentSlide.nextElementSibling;

      if (nextSlide) {
        nextSlide.classList.add(CLASS_TESTIMONIALS_SHOWING);
      } else {
        testimonialsFirstCard.classList.add(CLASS_TESTIMONIALS_SHOWING);
      }
    } else {
      testimonialsFirstCard.classList.add(CLASS_TESTIMONIALS_SHOWING);
    }
  }
}

testimonialsRightMove();

testimonialsBtnPrev.addEventListener("click", testimonialsLeftMove);
testimonialsBtnNext.addEventListener("click", testimonialsRightMove);

// Login-Modal 띄우기
signinBtn.addEventListener("click", () => {
  loginModal.classList.add("active");
  document.body.appendChild(modalOverlay);
});

loginModalClose.addEventListener("click", () => {
  loginModal.classList.remove("active");
  document.body.removeChild(modalOverlay);
});
