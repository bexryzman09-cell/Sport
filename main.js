const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dot");

const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let currentSlide = 0;


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, index) => {
        slide.classList.toggle(
            "active",
            index === currentSlide
        );
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });
}


/* =========================
   NEXT
========================= */

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});


/* =========================
   PREVIOUS
========================= */

prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});


/* =========================
   DOTS
========================= */

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});


/* =========================
   AUTO SLIDER
========================= */

let autoSlide = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);


/* =========================
   PAUSE ON HOVER
========================= */

const slider = document.querySelector(".news-slider");

slider.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

slider.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});


/* =========================
   START
========================= */

showSlide(0);