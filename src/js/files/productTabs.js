export default function productTabs() {
  const buttons = document.querySelectorAll("[data-product-tab-btn]");

  if (buttons.length) {
    const allTabs = document.querySelectorAll("[data-product-tab]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.productTabBtn;

        if (id) {
          buttons.forEach((b) => b.classList.remove("_active"));
          btn.classList.add("_active");
          handleOpen(id);
        }
      });
    });

    function handleOpen(id) {
      const tabs = document.querySelectorAll(`[data-product-tab="${id}"]`);

      allTabs.forEach((tab) => {
        tab.classList.remove("_show");
        setTimeout(() => {
          tab.classList.remove("_active");
        }, 150);
      });

      tabs.forEach((tab) => {
        setTimeout(() => {
          tab.classList.add("_active");
          setTimeout(() => {
            tab.classList.add("_show");
          }, 150);
        }, 150);
      });
    }
  }
}
