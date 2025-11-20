var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    speed: 1200, // durasi transisi fade (ms)
    autoplay: {
        delay: 4500,   // waktu tiap slide (ms)
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});