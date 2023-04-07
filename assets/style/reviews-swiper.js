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
    slidesPerGroup: 2,
    loop: true,
    speed: 200,

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
        200: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});