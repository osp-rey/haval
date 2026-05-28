import { createScript } from "./helpFunctions.js";

export default function map() {
  const maps = document.querySelectorAll(".map");

  if (maps.length) {
    maps.forEach((map) => {
      const options = {
        root: null,
        rootMargin: "0px",
        scrollMargin: "0px",
        threshold: 0.01,
      };

      function callback(entries, observer) {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            createScript(
              "https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU",
              "text/javascript",
            ).then(() => handlerCreateMap(target));

            observer.unobserve(target);
          }
        });
      }

      const observer = new IntersectionObserver(callback, options);

      observer.observe(map);
    });

    function handlerCreateMap(map) {
      const center = JSON.parse(map.dataset.center);
      const zoom = Number(map.dataset.zoom);
      const iconHref = map.dataset.icon;

      let iconSize = [250, 105];
      let iconPosition = [-122, -107];

      if (window.matchMedia("(max-width: 1365ox)")) {
        iconSize = [185,80];
        iconPosition = [-90, -85]
      }

      let objectMark = {};

      if (iconHref) {
        objectMark = {
          iconLayout: "default#image",
          iconImageHref: iconHref,
          iconImageSize: iconSize,
          iconImageOffset: iconPosition,
        };
      }

      function init() {
        const htmlMap = new ymaps.Map(map, {
          center,
          zoom,
        });

        const placemark = new ymaps.Placemark(center, {}, objectMark);

        htmlMap.geoObjects.add(placemark);

        htmlMap.controls.remove("geolocationControl"); // удаляем геолокацию
        htmlMap.controls.remove("searchControl"); // удаляем поиск
        htmlMap.controls.remove("trafficControl"); // удаляем контроль трафика
        htmlMap.controls.remove("typeSelector"); // удаляем тип
        htmlMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        // htmlMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
        htmlMap.controls.remove("rulerControl"); // удаляем контрол правил
        // htmlMap.behaviors.disable(["scrollZoom"]);
      }

      ymaps.ready(init);
    }
  }
}
