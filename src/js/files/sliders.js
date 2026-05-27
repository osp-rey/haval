export default function sliders() {
  const headerNavSlider = document.querySelector(".header-nav__slider");

  if (
    headerNavSlider &&
    window.matchMedia("(min-width: 992px) and (max-width: 1619px)").matches
  ) {
    const swiper = new Swiper(headerNavSlider, {
      speed: 900,
      slidesPerView: "auto",
    });
  }

  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const slides = heroSlider.querySelectorAll(".swiper-slide");
    function updateHeightSlider() {
      const headerNavHeight = window.matchMedia("(min-width:992px)").matches
        ? document.querySelector(".header-nav").clientHeight
        : 0;
      const headerHeight =
        document.querySelector(".header").clientHeight + headerNavHeight;
      slides.forEach(
        (slide) =>
          (slide.style.minHeight = `${window.visualViewport.height - headerHeight}px`),
      );
    }
    window.visualViewport.addEventListener("resize", updateHeightSlider);
    updateHeightSlider();

    const swiper = new Swiper(heroSlider, {
      speed: 900,
      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
    });
  }

  const catalogSliders = document.querySelectorAll(".s-catalog__slider");

  if (catalogSliders.length) {
    catalogSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 15,
        scrollbar: {
          el: slider.closest("[data-tab]").querySelector(".slider-scrollbar"),
          draggable: true,
        },
        breakpoints: {
          992: {
            slidesPerView: "auto",
            spaceBetween: 35,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
        },
      });
    });
  }

  const promoSlider = document.querySelector(".s-promo__slider");

  if (promoSlider) {
    const swiper = new Swiper(promoSlider, {
      speed: 900,
      slidesPerView: "auto",
      scrollbar: {
        el: ".s-promo .slider-scrollbar",
        draggable: true,
      },
      navigation: {
        prevEl: ".s-promo .slider-arrow._prev",
        nextEl: ".s-promo .slider-arrow._next"
      }
    });
  }
}
