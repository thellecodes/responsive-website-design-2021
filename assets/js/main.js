/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active-link"));
  this.classList.add("active-link");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHandler() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHandler);

/*===== SWIPER CAROUSEL =====*/
const mySwiper = new Swiper(".swiper-container", {
  spaceBetween: 16,
  grabCursor: true,
  loop: true,
  slidesPerView: 3,
  autoSlide: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/*===== GSAP ANIMATION =====*/
gsap.from(".home__img, .service__img, .tools__box, .what__img", {
  opacity: 0,
  duration: 2,
  delay: 0.5,
});

gsap.from(".home__grid, .how__container, .tools__container", {
  opacity: 0,
  duration: 2,
  delay: 0.7,
});

gsap.from(".home__data, .service__data, .service__help, .what__data", {
  opacity: 0,
  duration: 2,
  delay: 0.8,
  y: 25,
});

gsap.from(".partner", { opacity: 0, duration: 2, delay: 0.8, y: 25 });

gsap.from(
  ".home__greeting, .home__name, .home__profression, .home__button, .how__desc, .how__box",
  {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 15,
    ease: "expo.out",
    stagger: 0.2,
  }
);

gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
