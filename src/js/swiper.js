const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".custom-dot");
let currentSlide = 0;
const totalSlides = dots.length;

const updateSlider = () => {
  // Update slider position
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dot styles
  dots.forEach((dot, index) => {
    dot.classList.toggle("custom-dot-active", index === currentSlide);
  });
};

// Auto-slide functionality
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 3000); // Change every 3 seconds

// Initialize the first dot as active
updateSlider();
