new Swiper(".guest_reviews", {
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
    eventsTarget: ".guest_reviews",
  },

  simulateTouch: true,
  grabCursor: true,

  watchOverflow: true,

  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1124: {
      slidesPerView: 4,
    },
  },
});
