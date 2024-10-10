//team
$(document).ready(function () {
  // Обработчик наведения на карточку
  $(".team__slide").on("mouseenter", function () {
    // Скрыть информацию в других слайдах
    $(".team__slide-info").removeClass("active").fadeOut();

    // Показать информацию текущего слайда
    $(this).find(".team__slide-info").addClass("active").fadeIn();
  });

  // Обработчик выхода мыши из карточки
  $(".team__slide").on("mouseleave", function () {
    // Скрыть информацию текущего слайда при выходе курсора
    $(this).find(".team__slide-info").removeClass("active").fadeOut();
  });
});

// $('[data-modal="menu-modal"]').on("click", () => {
//   $(".modal-bidl").addClass("modal-active");
// });

$(document).ready(function () {
  $(".modal-calc__right-item").on(
    "click",
    ".modal-calc__right-btn",
    function () {
      $(this)
        .closest(".modal-calc__right-item")
        .find(".modal-calc__right-btn")
        .removeClass("active");

      $(this).addClass("active");
    }
  );
});
