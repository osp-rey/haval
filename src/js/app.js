import "../scss/style.scss";
import burger from "./files/burger.js";
import buttonsNote from "./files/buttonsNote.js";
import changeModaltitle from "./files/changeModalTitle.js";
import handlerSelect from "./files/handleSelect.js";
import inputmask from "./files/inputmask.js";
import map from "./files/maps.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tab from "./files/tab.js";

document.addEventListener("DOMContentLoaded", () => {
  sliders();
  burger();
  handlerSelect();
  tab();
  inputmask();
  buttonsNote();
  changeModaltitle();
  spoller();
  map();

  Fancybox.bind("[data-fancybox]", {
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
  // Fancybox.show([{ type: "inline", src: "#modal-callback" }]);
});
