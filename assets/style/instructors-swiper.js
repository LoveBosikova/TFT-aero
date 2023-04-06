new Swiper(".instructors", {
  navigation: {
    nextEl: ".instructors__left",
    prevEl: ".instructors__right",
  },
  pagination: {
    el: ".snp-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  autoHeight: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  speed: 600,

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
    400: {
      slidesPerView: 4,
    },
  },
});
