var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800,
    autoplay: { delay: 4000 },
    effect: "fade",
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
