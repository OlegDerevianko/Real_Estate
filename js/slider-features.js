const swiper = new Swiper('.mySwiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1200: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    },
    
    pagination: {
    el: '.pagination',
    type: "fraction",
    formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
    }},
    

    navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    }
    });

    
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },  
