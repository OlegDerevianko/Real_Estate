featuresSwiper = new  Swiper('.features__swiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },    

    pagination: {
    el: '.features__pagination-numbers1',
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
    nextEl: '.features__button-next',
    prevEl: '.features__button-prev',    
    }    
    });  
    
featuresSubSwiper = new Swiper(".features__swiper", {
        loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },    
        pagination: {
        el: ".features__pagination-numbers",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
        }
        }
    });

featuresSwiper.controller.control = featuresSubSwiper;


feedbackSwiper = new Swiper('.feedback__swiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },   

    pagination: {
    el: '.feedback__pagination-numbers1',
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
    nextEl: '.feedback__button-next',
    prevEl: '.feedback__button-prev',
    }
    });
feedbackSubSwiper = new Swiper('.feedback__swiper', {    
    
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
                spaceBetween: 0
            },        
            1440: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },   
    
        pagination: {
        el: '.feedback__pagination-numbers',
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
        nextEl: '.feedback__button-next',
        prevEl: '.feedback__button-prev',
        }
        });

        feedbackSwiper.controller.control = feedbackSubSwiper;


questionSwiper = new Swiper('.question__swiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },   

    pagination: {
    el: '.question__pagination-numbers1',
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
    nextEl: '.question__button-next',
    prevEl: '.question__button-prev',
    }
    });
questionSubSwiper = new Swiper('.question__swiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },   

    pagination: {
    el: '.question__pagination-numbers',
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
    nextEl: '.question__button-next',
    prevEl: '.question__button-prev',
    }
    });

questionSwiper.controller.control = questionSubSwiper;

clientsSwiper = new  Swiper('.clients__swiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1920: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    },    

    pagination: {
    el: '.clients__pagination-numbers',
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
    nextEl: '.clients__btn-next',
    prevEl: '.clients__btn-prev',    
    }    
    });

clientsSubSwiper = new  Swiper('.clients__swiper', {    
    
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        },        
        1440: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1920: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    },    

    pagination: {
    el: '.clients__pagination-numbers1',
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
    nextEl: '.clients__btn-next',
    prevEl: '.clients__btn-prev',    
    }    
    });  

clientsSwiper.controller.control = clientsSubSwiper;
