// Initialize Swiper
var swiper = new Swiper('.bike-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, // Change slide every 5 seconds
    },
});

//Swiper
var swiper = new Swiper(".bike-container", { // Changed from .bike-slider to .bike-container
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      // On click autoplay don't stop if false
      disableOnInteraction: false,
    },
    breakpoints: {
      280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
});
