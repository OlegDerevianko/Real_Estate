new Swiper(".mySwiper", {
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".pages-numbers",
        type: "fraction",
        formatFractionCurrent: function(number) {
            return ("0" + number).slice(-2);
        },
        formatFractionTotal: function(number) {
            return ("0" + number).slice(-2);
        },
        renderFraction: function(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + " of " + '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".features-button-next",
        prevEl: ".features-button-prev"
    }
});
new Swiper(".feedback-swiper", {
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".feedback-numbers",
        type: "fraction",
        formatFractionCurrent: function(number) {
            return ("0" + number).slice(-2);
        },
        formatFractionTotal: function(number) {
            return ("0" + number).slice(-2);
        },
        renderFraction: function(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + " of " + '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".feedback-button-next",
        prevEl: ".feedback-button-prev"
    }
});
new Swiper(".question-swiper", {
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".question-numbers",
        type: "fraction",
        formatFractionCurrent: function(number) {
            return ("0" + number).slice(-2);
        },
        formatFractionTotal: function(number) {
            return ("0" + number).slice(-2);
        },
        renderFraction: function(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + " of " + '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".question-button-next",
        prevEl: ".question-button-prev"
    }
});

//# sourceMappingURL=index.109e5710.js.map
