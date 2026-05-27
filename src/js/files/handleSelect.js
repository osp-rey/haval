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

      const items = select.querySelectorAll(".select-item");
      const btn = select.querySelector(".select-btn");
      const input = select.querySelector(".select-input");

      btn.addEventListener("click", () => {
        select.classList.toggle("_open");
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
