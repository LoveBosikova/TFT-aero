new Swiper(".instructors", {
  navigation: {
    nextEl: ".pointers__rightside",
    prevEl: ".pointers__leftside",
  },
  pagination: {
    el: ".snp-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 10,

  autoplay: {
    delay: 10000,
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
    eventsTarget: ".instructors",
  },

  simulateTouch: true,
  grabCursor: true,

  watchOverflow: true,

  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    768: {
      enabled: true,
      slidesPerView: 3,
    },
    1120: {
      enabled: false,
      slidesPerView: 4,
    },
  },
});
