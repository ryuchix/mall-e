// import Swiper from 'swiper';
import Splide from '@splidejs/splide';

var splide_init = false;

document.addEventListener('DOMContentLoaded', function () {
    var splide1 = new Splide( '#splide-malls', {
        type: 'loop',
        rewind: true,
        drag: true,
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        padding: {
            left : 0,
            right: '6rem',
        },
        breakpoints: {
            768: {
                perPage: 1,
            },
            999: {
                type: 'slide',
                destroy: true
            },
            1440: {
                type: 'slide',
                destroy: true
            },
        },
    } ).mount();
    var splide2 = new Splide( '#splide-merchants', {
        type: 'loop',
        rewind: true,
        drag: true,
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        padding: {
            left : 0,
            right: '6rem',
        },
        breakpoints: {
            768: {
                perPage: 1,
            },
            999: {
                type: 'slide',
                destroy: true
            },
            1440: {
                type: 'slide',
                destroy: true
            },
        },
    } ).mount();
    var splide3 = new Splide( '#splide-categories', {
        type: 'loop',
        rewind: true,
        drag: true,
        perPage: 2,
        perMove: 1,
        pagination: false,
        arrows: false,
        padding: {
            left : 0,
            right: '4rem',
        },
        breakpoints: {
            768: {
                perPage: 2,
            },
            999: {
                type: 'slide',
                destroy: true
            },
            1440: {
                type: 'slide',
                destroy: true
            },
        },
    } ).mount();
    var splide4 = new Splide( '#splide-brands', {
        type: 'loop',
        rewind: true,
        drag: true,
        perPage: 2,
        perMove: 1,
        pagination: false,
        arrows: false,
        padding: {
            left : 0,
            right: '4rem',
        },
        breakpoints: {
            768: {
                perPage: 2,
            },
            999: {
                type: 'slide',
                destroy: true
            },
            1440: {
                type: 'slide',
                destroy: true
            },
        },
    } ).mount();
});



/* On Load
**************************************************************/
// window.addEventListener('load', function() {
//     swiperMode();
// });

// /* On Resize
// **************************************************************/
// window.addEventListener('resize', function() {
//     swiperMode();
// });

// var init = false;
// var swiper = Swiper;
// var swiper2 = Swiper;
// var swiper3 = Swiper;
// var swiper4 = Swiper;
// var swiper5 = Swiper;


// // Swiper: Slider
// new Swiper('.swiper-container', {
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     centeredSlides: true,
//   slidesPerView:1,
//             spaceBetween: 10,
//     loop: false,
//     loopedSlides: 1,
//     watchSlidesVisibility: true,
//     breakpoints: {

//         1028: {
//             slidesPerView:1,
//             spaceBetween: 30,
//         },
//         480: {
//             slidesPerView:1,
//             spaceBetween: 10,
//         }
//     }
// });




// function swiperMode() {
//     let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
//     let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
//     let desktop = window.matchMedia('(min-width: 1025px)');

//     // Enable (for mobile)
//     if(mobile.matches) {
//         if (!init) {
//             init = true;
//             swiper = new Swiper('.brands-container', {
//                 slidesPerView: 3,
//                 centeredSlides: true,
//                 spaceBetween: 10,
//                 loop: true,
//                 watchSlidesVisibility: true,

//                 breakpoints: {
//                     767: {
//                         slidesPerView: 3,
//                         spaceBetween: 10,
//                     }
//                 }
//             });
//             swiper2 = new Swiper('.malls-container', {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//                 loopedSlides: 1,
//                 watchSlidesVisibility: true,
//                 direction: 'horizontal',
//                 loop: true,
//                 centeredSlides: true,

//                 breakpoints: {
//                     767: {
//                         slidesPerView: 1,
//                         spaceBetween: 10,   
//                     }

//                 }
//             });
//             swiper3 = new Swiper('.categories-container', {
//                 slidesPerView: 3,
//                 spaceBetween: 10,
//                 loop: false,

//                 breakpoints: {
//                     767: {
//                         slidesPerView: 3,
//                         spaceBetween: 10,
//                     }
//                 }
//             });
//         }

//     }

//     // Disable (for tablet)
//     else if(tablet.matches) {
//         swiper.destroy();
//         swiper2.destroy();
//         swiper3.destroy();
//         init = false;
//     }

//     // Disable (for desktop)
//     else if(desktop.matches) {
//         swiper.destroy();
//         swiper2.destroy();
//         swiper3.destroy();
//         init = false;
//     }
// }
