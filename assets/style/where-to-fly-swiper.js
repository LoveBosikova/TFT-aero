new Swiper(".where-to-fly", {
  navigation: {
    nextEl: ".pointers__rightside",
    prevEl: ".pointers__leftside",
  },
  pagination: {
    el: ".snp-pagination",
    clickable: true,
    /*Return bullets as numbers*/
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 100,
  slidesPerGroup: 2,
  loop: true,
  speed: 500,

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
    eventsTarget: ".where-to-fly",
  },

  simulateTouch: true,
  grabCursor: true,

  watchOverflow: true,

  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    2000: {
      slidesPerView: 4,
    },
  },
});
