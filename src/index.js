//team
// $(document).ready(function () {
//   // Обработчик наведения на карточку
//   $(".team__slide").on("mouseenter", function () {
//     // Скрыть информацию в других слайдах
//     $(".team__slide-info").removeClass("active").fadeOut();

//     // Показать информацию текущего слайда
//     $(this).find(".team__slide-info").addClass("active").fadeIn();
//   });

//   // Обработчик выхода мыши из карточки
//   $(".team__slide").on("mouseleave", function () {
//     // Скрыть информацию текущего слайда при выходе курсора
//     $(this).find(".team__slide-info").removeClass("active").fadeOut();
//   });
// });

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

// comment
$(document).ready(function () {
  $(".all-com__reply").on("click", function () {
    const nestedBlock = $(this).siblings(".all-com__nested"); // Ищем блок рядом с кнопкой

    if (nestedBlock.length) {
      nestedBlock.toggleClass("active"); // Переключаем класс active

      // Меняем текст кнопки в зависимости от состояния
      const isActive = nestedBlock.hasClass("active");
      $(this)
        .find("p")
        .text(isActive ? "Скрыть" : "Показать ещё 2 ответа");
    } else {
      console.error("Блок .all-com__nested не найден");
    }
  });
});

// ответить

$(document).ready(function () {
  $(".reply-button").on("click", function () {
    // Находим блок new-com, который идет после кнопки
    const newComBlock = $(this).closest(".all-com__block").find(".new-com");

    // Показываем блок new-com
    newComBlock.removeClass("hidden");

    // Устанавливаем opacity 0 для скрытия кнопки
    $(this).css("opacity", "0");
  });
});

//редактировать данные в инпуте

$(document).ready(function () {
  // Обработчик кнопки "Редактировать/Сохранить"
  $(".edit-btn").on("click", function () {
    const formBox = $(this).closest(".account-data__form-box");

    // Проверяем, что находимся в блоке с паролем
    const isPasswordBox = formBox.hasClass("account-data__password");
    const isEditing = $(this).data("editing") || false;

    if (isEditing) {
      if (isPasswordBox) {
        // Выполняем проверку совпадения нового пароля и его подтверждения
        const newPassword = formBox.find("#newPassword").val();
        const confirmPassword = formBox.find("#confirmPassword").val();

        if (newPassword !== confirmPassword) {
          formBox
            .find("#confirmPassword-error")
            .text("Пароли не совпадают")
            .css("display", "inline");
          return; // Прерываем выполнение, если пароли не совпадают
        } else {
          formBox.find("#confirmPassword-error").text("").hide(); // Скрываем ошибку
        }

        // Удаляем динамически добавленные поля
        formBox.find("#newPassword, #confirmPassword").closest("li").remove();
      }

      // Завершаем редактирование
      formBox.find(".form-input").prop("disabled", true); // Блокируем поля
      formBox.find("#password").attr("type", "password"); // Скрываем старый пароль
      formBox.find(".icon-eye").attr("src", "./assets/images/icon-eye.svg"); // Восстанавливаем иконку

      $(this).find(".txt16-days").text("редактировать");
      $(this).data("editing", false);
    } else {
      // Включаем режим редактирования
      formBox.find(".form-input").prop("disabled", false); // Разблокируем поля

      if (isPasswordBox) {
        formBox.find("#password").attr("type", "text"); // Показываем старый пароль
        formBox
          .find(".icon-eye")
          .attr("src", "./assets/images/icon-eye-off.svg"); // Меняем иконку

        // Добавляем поля для нового пароля и его подтверждения
        const newPasswordFields = `
          <li class="account-data__form-item">
            <label class="form-label">
              <input
                name="newPassword"
                id="newPassword"
                class="form-input"
                type="password"
                placeholder="Новый Пароль"
                required
              />
              <span class="error-message" id="newPassword-error"></span>
              <button type="button" class="toggle-password">
                <img
                  src="./assets/images/icon-eye-off.svg"
                  alt="icon-eye"
                  class="icon-eye"
                />
              </button>
            </label>
          </li>
          <li class="account-data__form-item">
            <label class="form-label">
              <input
                name="confirmPassword"
                id="confirmPassword"
                class="form-input"
                type="password"
                placeholder="Повторите Пароль"
                required
              />
              <span class="error-message" id="confirmPassword-error"></span>
              <button type="button" class="toggle-password">
                <img
                  src="./assets/images/icon-eye-off.svg"
                  alt="icon-eye"
                  class="icon-eye"
                />
              </button>
            </label>
          </li>`;

        // Вставляем поля в блок с паролем
        formBox.find(".account-data__form-list").append(newPasswordFields);
      }

      $(this).find(".txt16-days").text("сохранить");
      $(this).data("editing", true);
    }
  });

  // Логика переключения видимости пароля
  $(document).on("click", ".toggle-password", function () {
    const inputField = $(this).siblings("input");
    const eyeIcon = $(this).find("img");

    if (inputField.attr("type") === "password") {
      inputField.attr("type", "text");
      eyeIcon.attr("src", "./assets/images/icon-eye-off.svg");
    } else {
      inputField.attr("type", "password");
      eyeIcon.attr("src", "./assets/images/icon-eye.svg");
    }
  });
});

//акктивные и завершенные заявки
$(document).ready(function () {
  // Устанавливаем активный список и кнопку при загрузке страницы
  const activeButton = $(".account-req__top-btn[data-target='active-order']");
  const activeList = $("#active-order");

  // Применяем активный класс к кнопке и показываем активный список
  activeButton.addClass("active");
  activeList.show();

  // Обработчик клика по кнопкам "Активные" и "Завершённые"
  $(".account-req__top-btn").on("click", function () {
    const target = $(this).data("target"); // Получаем целевой список
    const listToShow = $("#" + target); // Находим соответствующий список

    // Убираем класс active у всех кнопок и добавляем текущей
    $(".account-req__top-btn").removeClass("active");
    $(this).addClass("active");

    // Скрываем все списки и показываем только целевой
    $(".account-req__list").hide();
    listToShow.show();
  });
});

//форма аккаунта выбор кнопок(физ.лицо, юр. лицо и тд.)
// $(document).ready(function () {
//   $(".account__form-btn").on("click", function (event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение кнопки

//     // Убираем класс active у всех кнопок в родительском контейнере
//     $(this)
//       .closest(".account__form-btns")
//       .find(".account__form-btn")
//       .removeClass("active");

//     // Добавляем класс active к нажатой кнопке
//     $(this).addClass("active");
//   });
// });

//партнерская программа

$(document).ready(function () {
  $(".acc-partner__btn").on("click", function () {
    const target = $(this).index(); // Получаем индекс нажатой кнопки
    const blocks = $(".acc-partner__right"); // Все блоки, которые нужно переключать

    // Убираем класс active у всех кнопок и добавляем текущей
    $(".acc-partner__btn").removeClass("active");
    $(this).addClass("active");

    // Скрываем все блоки и показываем соответствующий по индексу
    blocks.hide().eq(target).show();
  });

  // Инициализация: показываем первый блок по умолчанию
  $(".acc-partner__btn").first().addClass("active");
  $(".acc-partner__right").hide().first().show();
});

//ДЛЯ ИНПУТА ДАТА ВЫДАЧИ
$(document).ready(function () {
  // Когда поле получает фокус, меняем тип на date
  $("#passportDate").on("focus", function () {
    $(this).attr("type", "date");
  });

  // Когда поле теряет фокус, возвращаем тип на text, если значение пустое
  $("#passportDate").on("blur", function () {
    if (!$(this).val()) {
      $(this).attr("type", "text");
    }
  });
});

//acc-partner__dtl - физ лицо, юр.лицо, предпринималь
$(document).ready(function () {
  $(".account__form-btn").on("click", function (event) {
    event.preventDefault();

    const targetFormId = $(this).data("target"); // Получаем ID целевой формы
    const formContainer = $(this).closest(".account__block-form"); // Находим контейнер форм

    // Скрываем все формы и показываем только целевую
    formContainer.find(".account__form").hide();
    formContainer.find(`#${targetFormId}`).show();
  });
});

//placeholder
$(document).ready(function () {
  function updatePlaceholder() {
    const input = $(".search-result__input");
    if ($(window).width() <= 768) {
      input.attr("placeholder", "Поиск по услугам");
    } else {
      input.attr("placeholder", "Поиск по товарным знакам");
    }
  }

  // Вызов функции при загрузке страницы и изменении размера окна
  updatePlaceholder();
  $(window).resize(updatePlaceholder);
});

//Кнопки acc-search-cat
$(document).ready(function () {
  $(".acc-search-cat__item").on("click", function () {
    $(".acc-search-cat__item").removeClass("active");

    $(this).addClass("active");
  });
});

//фильтры  в акккаунет поиск

$(document).ready(function () {
  $("#filter-btn").on("click", function () {
    // Показываем или скрываем блок фильтров
    $(".acc-search__filter").toggleClass("hidden");

    // Переключаем изображение и текст кнопки
    const iconFilter = $(this).find(".icon-set-img");
    const iconClose = $(this).find(".icon-close-menu");

    if ($(".acc-search__filter").hasClass("hidden")) {
      iconFilter.show();
      iconClose.hide();
    } else {
      iconFilter.hide();
      iconClose.show();
    }
  });
});

//страны
$(document).ready(function () {
  // Переключение видимости country-box при клике на input или стрелку
  $(".country-search-input, .arrow-country").on("click", function () {
    const countrySearchInput = $(".country-search-input");
    const countryBox = $("#country-box");

    // При открытии очищаем поле и делаем его доступным для ввода
    if (countryBox.is(":hidden")) {
      countrySearchInput.val("").removeAttr("readonly");
    } else {
      // При закрытии, если поле пустое, восстанавливаем плейсхолдер "Все страны"
      if (!countrySearchInput.val().trim()) {
        countrySearchInput.val("Все страны").attr("readonly", true);
      }
    }

    countryBox.toggle(); // Переключаем видимость списка стран
    $(".arrow-country-down").toggle(); // Переключаем видимость стрелки вниз
    $(".arrow-country-up").toggle(); // Скрываем видимость стрелки вверх
  });

  // Закрытие списка стран при клике вне его области
  $(document).on("click", function (event) {
    const target = $(event.target);
    if (!target.closest(".country-select-container").length) {
      $("#country-box").hide(); // Скрываем список
      $(".arrow-country-down").show(); // Показываем стрелку вниз
      $(".arrow-country-up").hide(); // Скрываем стрелку вверх
      // Если поле пустое, устанавливаем плейсхолдер и атрибут readonly
      if (!$(".country-search-input").val().trim()) {
        $(".country-search-input").val("Все страны").attr("readonly", true);
      }
    }
  });

  // Загрузка списка стран из JSON и добавление в .country-list
  $.getJSON(
    "https://raw.githubusercontent.com/umpirsky/country-list/master/data/ru/country.json",
    function (data) {
      const countryList = $(".country-list");
      countryList.empty(); // Очищаем список перед добавлением стран

      $.each(data, function (code, name) {
        countryList.append(
          `<div class="country-item" data-code="${code}">${name}</div>`
        );
      });

      // Добавляем элемент для сообщения "Ничего не найдено" и скрываем его по умолчанию
      countryList.append(
        `<div class="no-results" style="display: none;">Ничего не найдено</div>`
      );
    }
  );

  // Обработчик поиска по странам
  $(".country-search-input").on("input", function () {
    const searchQuery = $(this).val().toLowerCase();
    let hasResults = false;

    // Фильтрация списка стран
    $(".country-item").each(function () {
      const countryName = $(this).text().toLowerCase();
      const matches = countryName.includes(searchQuery);
      $(this).toggle(matches);

      if (matches) hasResults = true; // Если есть совпадение, ставим флаг в true
    });

    // Показ сообщения "Ничего не найдено", если совпадений нет
    $(".no-results").toggle(!hasResults);
  });

  // Обработчик клика по стране из списка
  $(document).on("click", ".country-item", function () {
    const selectedCountry = $(this).text();
    $(".country-search-input").val(selectedCountry); // Устанавливаем выбранную страну в input
    $("#country-box").hide(); // Закрываем список
    $(".arrow-country-down").show(); // Показываем стрелку вниз
    $(".arrow-country-up").hide(); // Скрываем стрелку вверх
    $(".country-search-input").attr("readonly", true); // Возвращаем атрибут readonly
  });
});
