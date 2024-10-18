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

//модалка каклькулятор
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

//модалка для карточки поиска
$(document).ready(function () {
  function adjustText() {
    // Устанавливаем количество символов для десктопа и мобильных устройств
    var lettersToCutDesktop = 250; // Максимальное количество символов для десктопа
    var lettersToCutMobile = 170; // Максимальное количество символов для мобильных

    // Проверяем ширину экрана
    var isMobile = $(window).width() <= 768; // Определяем, мобильное устройство или нет

    // Устанавливаем нужное количество символов в зависимости от устройства
    var lettersToCut = isMobile ? lettersToCutMobile : lettersToCutDesktop;

    $(".modal-search__class").each(function () {
      var contentWrapper = $(this); // Обращаемся к каждому отдельному элементу
      var contentText = contentWrapper.data("original-text"); // Получаем полный текст из data-атрибута

      // Если это первая загрузка, сохраняем полный текст в data-атрибут
      if (!contentText) {
        contentText = contentWrapper.text().trim(); // Получаем полный текст
        contentWrapper.data("original-text", contentText); // Сохраняем его для дальнейшего использования
      }

      // Проверяем, если текст превышает максимальную длину
      if (contentText.length > lettersToCut) {
        var visibleText = contentText.substr(0, lettersToCut); // Обрезаем текст
        contentWrapper.html(
          visibleText + "... <button class='txt-btn'>читать далее</button>"
        ); // Добавляем кнопку "Читать далее"
      } else {
        contentWrapper.html(contentText); // Если текст меньше, показываем полный текст
      }
    });
  }

  adjustText();

  // Добавляем обработчик события на изменение размера экрана
  $(window).resize(function () {
    adjustText(); // Перезапускаем логику обрезки текста при изменении размера экрана
  });

  // Обработчик клика по кнопке "Читать далее"
  $(document).on("click", ".txt-btn", function (e) {
    e.preventDefault();
    var contentWrapper = $(this).parent(); // Обращаемся к родительскому элементу (элементу с текстом)
    var originalText = contentWrapper.data("original-text"); // Получаем полный текст из data-атрибута
    contentWrapper.html(originalText); // Восстанавливаем полный текст
  });
});

//cat-pricing
$(document).ready(function () {
  $(".cat-pricing__cat-btn").on("click", function () {
    const $thisButton = $(this); // Сохраняем ссылку на кликнутую кнопку
    const $parentItem = $thisButton.closest(".cat-pricing__cat-item"); // Находим родительский элемент
    const $subList = $parentItem.find(".cat-pricing__sub-list"); // Ищем соответствующий подсписок

    // Переключаем видимость подсписка с анимацией
    $subList.stop(true, true).slideToggle(300); // 300ms для плавного открытия/закрытия

    // Переключаем класс для кнопки (иконка плюс/минус)
    $thisButton.toggleClass("active");
  });
});

//question

$(document).ready(function () {
  $(".questions__item-btn").on("click", function () {
    const $thisButton = $(this);
    const $parentItem = $thisButton.closest(".questions__item");
    const $subList = $parentItem.find(".question__item-toggle");

    $subList.stop(true, true).slideToggle(200);

    $thisButton.toggleClass("active");
  });
});
