new Swiper(".difference", {
  navigation: {
    nextEl: ".pointers__rightside",
    prevEl: ".pointers__leftside",
  },

  slidesPerView: 1,
  loop: false,
  spaceBetween: 10,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".difference",
  },

  simulateTouch: true,
  grabCursor: true,

  breakpoints: {
    420: {
      slidesPerView: 2,
      enabled: true,
    },
  },
});
