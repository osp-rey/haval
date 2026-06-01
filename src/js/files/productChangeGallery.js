import { createEl } from "./helpFunctions.js";

export default function productChangeGallery() {
  const buttons = document.querySelectorAll(".s-product__color");

  if (buttons.length) {
    const gallery = document.querySelector(".s-product__gallery");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const images = btn.dataset.galleryImages;

        buttons.forEach((b) => b.classList.remove("_active"));
        btn.classList.add("_active");

        createGallery(images.split(","));
      });
    });

    function createGallery(images) {
      gallery.style.opacity = 0;

      setTimeout(() => {
        gallery.innerHTML = "";

        const slider = createEl("div", "swiper s-product__slider");
        const swiperWrapper = createEl("div", "swiper-wrapper");
        const pagination = createEl("div", "slider-pagination");

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
