new Swiper(".where-to-fly", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 100,
  slidesPerGroup: 2,
  loop: true,
  speed: 500,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".where-to-fly",
  },

  simulateTouch: true,
  grabCursor: true,

  watchOverflow: true,

  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    2000: {
      slidesPerView: 4,
    },
  },
});
