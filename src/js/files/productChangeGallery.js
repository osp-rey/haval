import { createEl } from "./helpFunctions.js";

export default function productChangeGallery() {
  const buttons = document.querySelectorAll(".s-product__color");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const activeTab = document.querySelector("[data-product-tab]._active");
        const gallery = activeTab.querySelector(".s-product__gallery");
        const images = btn.dataset.galleryImages;
        const currentColor = document.querySelector("#product-current-color");
        const currentButtons = btn.closest(".s-product__colors-slider").querySelectorAll(".s-product__color");

        currentButtons.forEach((b) => b.classList.remove("_active"));
        btn.classList.add("_active");
        currentColor.textContent = btn.dataset.nameColor;

        createGallery(gallery, images.split(","));
      });
    });

    function createGallery(gallery, images) {
      gallery.style.opacity = 0;

      setTimeout(() => {
        gallery.innerHTML = "";

        const slider = createEl("div", "swiper s-product__slider");
        const swiperWrapper = createEl("div", "swiper-wrapper");
        const pagination = createEl("div", "slider-pagination");

        const sliderArrows = createEl("div", "slider-arrows");
        const sliderArrowPrev = createEl("div", "slider-arrow _prev");
        const sliderArrowNext = createEl("div", "slider-arrow _next");

        sliderArrowPrev.innerHTML = `
        <svg  viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8332 21.2907L2.08252 11.1655L11.8332 1.04047" stroke="white" stroke-width="3" />
        </svg>`;
        sliderArrowNext.innerHTML = `
        <svg viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.08036 21.2907L10.8311 11.1655L1.08036 1.04047" stroke="white" stroke-width="3" />
        </svg>`;

        sliderArrows.appendChild(sliderArrowPrev);
        sliderArrows.appendChild(sliderArrowNext);

        images.forEach((image) => {
          const slide = createEl("a", "swiper-slide");
          const img = createEl("img");
          img.src = image;
          slide.href = image;

          slide.appendChild(img);
          slide.setAttribute("data-fancybox", "product-gallery");

          swiperWrapper.appendChild(slide);
        });

        slider.appendChild(swiperWrapper);
        gallery.appendChild(pagination);
        gallery.appendChild(sliderArrows);
        gallery.appendChild(slider);

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

        gallery.style.opacity = 1;
      }, 300);
    }
  }
}
