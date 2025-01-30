
<script>
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    slidesPerView: 3, // Number of slides visible at a time
    spaceBetween: 40, // Space between slides
    autoplay: {
      delay: 3000, // Time between slide transitions
      disableOnInteraction: false, // Continue autoplay after interaction
    },
    breakpoints: {
      // Adjust slides per view based on screen size
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
</script>
