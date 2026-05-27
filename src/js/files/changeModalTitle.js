export default function changeModaltitle() {
  const buttons = document.querySelectorAll(
    "[data-fancybox][data-modal-title]",
  );

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const titleValue = btn.dataset.modalTitle;

        if (titleValue) {
          const selector = btn.getAttribute("href") || btn.dataset.src;
          console.log(selector)
          const modalTitle = document
            .querySelector(selector)
            .querySelector(".modal__title");
          if (modalTitle) modalTitle.textContent = titleValue;
        }
      });
    });
  }
}
