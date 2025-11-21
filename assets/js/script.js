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

/* ==========================
   MOBILE MENU TOGGLE
=========================== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Saat hamburger diklik
hamburger.addEventListener("click", () => {
    // Toggle class "active" pada menu dan icon
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Ubah icon: Jika aktif jadi "X", jika tidak jadi "Garis Tiga"
    const icon = hamburger.querySelector("i");
    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Tutup menu saat salah satu link diklik
document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
    // Reset icon ke bars
    const icon = hamburger.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
}));