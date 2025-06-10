// Service Slider
{
  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".serviceSlider", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".serv_slide_next",
        prevEl: ".serv_slide_prev",
      },
    });
  });
}

// Testimonial Slider
{
  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".testBoxesHldr", {
      slidesPerView: 3.5,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        540: {
          slidesPerView: 1.2,
          spaceBetween: 25,
        },
        770: {
          slidesPerView: 2.2,
          spaceBetween: 25,
        },
        1025: {
          slidesPerView: 2.7,
          spaceBetween: 25,
        },
        1350: {
          slidesPerView: 3.2,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".test_slide_next",
        prevEl: ".test_slide_prev",
      },
    });
  });
}
