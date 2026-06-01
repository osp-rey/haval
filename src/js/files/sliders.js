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
          (slide.style.minHeight = `${window.innerHeight - headerHeight}px`),
      );
    }
    // window.addEventListener("resize", updateHeightSlider);
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
        nextEl: ".s-promo .slider-arrow._next",
      },
    });
  }

  const aboutSlider = document.querySelector(".s-about__slider");

  if (aboutSlider) {
    const thumbAboutSldier = document.querySelector(".s-about__thumb-slider");

    const thumbSwiper = new Swiper(thumbAboutSldier, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 10,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });

    const swiper = new Swiper(aboutSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: 1,
      autoplay: {
        delay: 65000,
      },
      thumbs: {
        swiper: thumbSwiper,
      },
      scrollbar: {
        el: ".s-about .slider-scrollbar",
        draggable: true,
      },
      navigation: {
        prevEl: aboutSlider.querySelector(".slider-arrow._prev"),
        nextEl: aboutSlider.querySelector(".slider-arrow._next"),
      },
    });
  }

  const productSliders = document.querySelectorAll(".s-product__slider");

  if (productSliders.length) {
    productSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 15,
        autoplay: {
          delay: 6000,
        },
        pagination: {
          el: slider
            .closest(".s-product__gallery")
            .querySelector(".slider-pagination"),
          clickable: true,
        },
        navigation: {
          prevEl: slider
            .closest(".s-product__gallery")
            .querySelector(".slider-arrow._prev"),
          nextEl: slider
            .closest(".s-product__gallery")
            .querySelector(".slider-arrow._next"),
        },
      });
    });
  }

  const colorsProductSliders = document.querySelectorAll(
    ".s-product__colors-slider",
  );

  if (
    colorsProductSliders.length &&
    window.matchMedia("(max-width: 991px)").matches
  ) {
    colorsProductSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        slidesPerView: "auto",
      });
    });
  }
  const complectationProductSliders = document.querySelectorAll(
    ".s-product__complectation-slider",
  );

  if (
    complectationProductSliders.length &&
    window.matchMedia("(max-width: 991px)").matches
  ) {
    complectationProductSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        slidesPerView: "auto",
      });
    });
  }
}
