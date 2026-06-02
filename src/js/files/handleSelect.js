export default function handlerSelect() {
  const selects = document.querySelectorAll(".select");

  if (selects.length) {
    document.body.addEventListener("click", () => {
      const openSelects = document.querySelectorAll(".select._open");

      if (openSelects.length)
        openSelects.forEach((s) => s.classList.remove("_open"));
    });

    selects.forEach((select) => {
      select.addEventListener("click", (e) => e.stopPropagation());
      const targetOptions = select.dataset.targetOptions;

      if (targetOptions) {
        const selector = `data-${targetOptions}-options`;
        const target = select.closest(`[${selector}]`);

        if (target) {
          const selectBody = select.querySelector(".select-body");
          const options = target.getAttribute(selector);
          console.log(options)
          const arrOptions = options.split(",");

          arrOptions.forEach((option) => {
            const item = document.createElement("div");
            item.classList.add("select-item");
            item.textContent = option;

            selectBody.appendChild(item);
          });
        }
      }

      const items = select.querySelectorAll(".select-item");
      const btn = select.querySelector(".select-btn");
      const input = select.querySelector(".select-input");

      btn.addEventListener("click", () => {
        if (select.classList.contains("_open")) {
          select.classList.remove("_open");
        } else {
          selects.forEach((s) => s.classList.remove("_open"));
          select.classList.add("_open");
        }
      });

      items.forEach((item) => {
        item.addEventListener("click", () => {
          handlerChange(item);
        });
      });

      function handlerChange(item) {
        const value = item.textContent.trim();
        input.value = value;
        select.classList.remove("_open");

        items.forEach((i) => i.classList.remove("_active"));
        item.classList.add("_active");
      }
    });
  }
}
