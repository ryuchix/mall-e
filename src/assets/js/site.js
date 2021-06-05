import Splide from '@splidejs/splide';

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