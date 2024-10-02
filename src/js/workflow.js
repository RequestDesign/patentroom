// workflow
$(document).ready(function () {
  // Скрываем все описания изначально, кроме первого
  $(".workflow__description").hide();
  $(".workflow__description").eq(0).show(); // Показываем первый текст
  $(".workflow__item").eq(0).addClass("workflow__item-active"); // Добавляем активный класс к первой кнопке

  // Обработчик клика на кнопки
  $(".workflow__item").click(function () {
    // Получаем номер кнопки (например, "01", "02", и т.д.)
    var index = $(this).find(".workflow__item-number").text().trim();

    // Скрываем все описания и удаляем активный класс со всех кнопок
    $(".workflow__description").hide();
    $(".workflow__item").removeClass("workflow__item-active");

    // Находим и отображаем соответствующий текст, добавляем активный класс к текущей кнопке
    $(".workflow__description")
      .eq(parseInt(index) - 1)
      .show();
    $(this).addClass("workflow__item-active");
  });

  // Обработчик наведения мыши на кнопки
  $(".workflow__item").hover(
    function () {
      // Снимаем активный класс со всех кнопок
      $(".workflow__item").removeClass("workflow__item-active");
      // Добавляем активный класс только к той кнопке, на которую пришёлся курсор
      $(this).addClass("workflow__item-active");

      // Получаем номер кнопки (например, "01", "02", и т.д.)
      var index = $(this).find(".workflow__item-number").text().trim();

      // Скрываем все описания и отображаем текущее
      $(".workflow__description").hide();
      $(".workflow__description")
        .eq(parseInt(index) - 1)
        .show();
    },
    function () {
      // Удаляем активный класс, если это не была текущая активная кнопка
      if (!$(this).hasClass("workflow__item-active")) {
        $(this).removeClass("workflow__item-active");
      }
    }
  );
});
