import Swiper from 'swiper';


// const swiper = new Swiper(".brands-container", {
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 1,
//     breakpoints: {
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//         },
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 7,
//             spaceBetween: 10,
//         },
//         1024: {
//             slidesPerView: 7,
//             spaceBetween: 10,
//         },
//       },
// });
var init = false;
var swiper = Swiper;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.brands-container', {
                slidesPerView: 1,
                centeredSlides: true,
                loop: true,
                spaceBetween: 10,
                direction: 'horizontal',

                breakpoints: {
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }

                }

            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});