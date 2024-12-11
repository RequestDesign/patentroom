/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 810:
/***/ (function() {

//партнерская программа

$(document).ready(function () {
  $(".acc-partner__btn").on("click", function () {
    const target = $(this).index();
    const blocks = $(".acc-partner__right");
    $(".acc-partner__btn").removeClass("active");
    $(this).addClass("active");
    blocks.hide().eq(target).show();
  });

  // первый блок по умолчанию
  $(".acc-partner__btn").first().addClass("active");
  $(".acc-partner__right").hide().first().show();
});

/***/ }),

/***/ 566:
/***/ (function() {

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
          formBox.find("#confirmPassword-error").text("Пароли не совпадают").css("display", "inline");
          return;
        } else {
          formBox.find("#confirmPassword-error").text("").hide();
        }
        formBox.find("#newPassword, #confirmPassword").closest("li").remove();
      }

      // Завершаем редактирование
      formBox.find(".form-input").prop("disabled", true);
      formBox.find("#password").attr("type", "password");
      formBox.find(".icon-eye").attr("src", "./assets/images/icon-eye.svg");
      $(this).find(".txt16-days").text("редактировать");
      $(this).data("editing", false);
    } else {
      // Включаем режим редактирования
      formBox.find(".form-input").prop("disabled", false);
      if (isPasswordBox) {
        formBox.find("#password").attr("type", "text");
        formBox.find(".icon-eye").attr("src", "./assets/images/icon-eye-off.svg");

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

/***/ }),

/***/ 535:
/***/ (function() {

//акктивные и завершенные заявки
$(document).ready(function () {
  const firstButton = $(".account-req__top-btn").first();
  const target = firstButton.data("target");
  const firstList = $("#" + target);
  firstButton.addClass("active");
  firstList.show();
  $(".account-req__top-btn").on("click", function () {
    const target = $(this).data("target");
    const listToShow = $("#" + target);
    $(".account-req__top-btn").removeClass("active");
    $(this).addClass("active");
    $(".account-req__top-btn").each(function () {
      const targetList = $("#" + $(this).data("target"));
      targetList.hide();
    });
    listToShow.show();
  });
});

/***/ }),

/***/ 978:
/***/ (function() {

// кнопка blog в мобильной версии

$(document).ready(function () {
  // Переменная для жеста
  let startX, endX;
  // Обработчик для кнопки "Показать текст"
  $(".blog__button-mobile").on("click", function () {
    console.log("ggg");
    var $parentSlideBox = $(this).closest(".blog__slide-box");
    var $currentText = $parentSlideBox.find(".blog__slide-text");

    // Удаляем класс active у всех блоков с текстом, кроме текущего
    $(".blog__slide-text").not($currentText).removeClass("text-active");

    // Переключаем класс active у текущего блока текста
    $currentText.toggleClass("text-active");
  });

  // Обработчик для начала жеста
  $(".blog__slide-box").on("mousedown touchstart", function (e) {
    startX = e.clientX || e.touches[0].clientX; // Получаем начальную позицию
  });

  $(".blog__slide-box").on("mouseup touchend", function (e) {
    endX = e.clientX || e.changedTouches[0].clientX; // Получаем конечную позицию

    if (startX > endX + 20 || startX < endX - 20) {
      $(".blog__slide-text").removeClass("text-active");
    }
  });
  $("#blog-prev").on("click", function () {
    $(".blog__slide-text").removeClass("text-active");
  });
  $("#blog-next").on("click", function () {
    $(".blog__slide-text").removeClass("text-active");
  });
});

//переключения цвета кнопок
$(document).ready(function () {
  $(".blog-pg__menu-item").first().addClass("active");
  $(".blog-pg__menu-item").on("click", function () {
    $(".blog-pg__menu-item").removeClass("active");
    $(this).addClass("active");
  });
});

/***/ }),

/***/ 247:
/***/ (function() {

//cat-pricing
$(document).ready(function () {
  $(".cat-pricing__cat-btn").on("click", function () {
    const $thisButton = $(this);
    const $parentItem = $thisButton.closest(".cat-pricing__cat-item");
    const $subList = $parentItem.find(".cat-pricing__sub-list");
    $subList.stop(true, true).slideToggle(300);
    $thisButton.toggleClass("active");
  });
});

/***/ }),

/***/ 745:
/***/ (function() {

// comment
$(document).ready(function () {
  $(".all-com__reply").on("click", function () {
    const nestedBlock = $(this).siblings(".all-com__nested");
    if (nestedBlock.length) {
      nestedBlock.toggleClass("active");
      const isActive = nestedBlock.hasClass("active");
      $(this).find("p").text(isActive ? "Скрыть" : "Показать ещё 2 ответа");
    } else {
      console.error("Блок .all-com__nested не найден");
    }
  });
});

// ответить

$(document).ready(function () {
  $(".reply-button").on("click", function () {
    const newComBlock = $(this).closest(".all-com__block").find(".new-com");
    newComBlock.removeClass("hidden");
    $(this).css("opacity", "0");
  });
});

/***/ }),

/***/ 862:
/***/ (function() {

$(document).ready(function () {
  const countrySearchInput = $(".country-search-input");
  const countryBox = $("#country-box");
  const arrowDown = $(".arrow-country-down");
  const arrowUp = $(".arrow-country-up");

  // Переключение видимости country-box при клике на стрелку вниз
  arrowDown.on("click", function () {
    toggleCountryBox();
  });
  arrowUp.on("click", function () {
    toggleCountryBox();
  });

  // Открытие country-box при клике на input
  countrySearchInput.on("click", function () {
    if (countryBox.is(":hidden")) {
      countrySearchInput.val("").removeAttr("readonly");
      countryBox.show();
      arrowDown.hide();
      arrowUp.show();
      $(".country-item").show();
      $(".no-results").hide();
    }
  });

  // Закрытие списка стран при клике вне его области
  $(document).on("click", function (event) {
    const target = $(event.target);
    if (!target.closest(".country-select-container").length) {
      closeCountryBox();
    }
  });

  // Функция переключения видимости country-box
  function toggleCountryBox() {
    countryBox.toggle();
    arrowDown.toggle();
    arrowUp.toggle();
    if (countryBox.is(":visible")) {
      countrySearchInput.val("").removeAttr("readonly"); // Очистка поля при открытии
      $(".country-item").show();
      $(".no-results").hide();
    } else {
      // Устанавливаем placeholder, если поле пустое
      if (!countrySearchInput.val().trim()) {
        const placeholderText = countrySearchInput.data("placeholder");
        countrySearchInput.val(placeholderText).attr("readonly", true);
      }
    }
  }

  // Функция закрытия country-box
  function closeCountryBox() {
    countryBox.hide();
    arrowDown.show();
    arrowUp.hide();

    // Устанавливаем placeholder, если поле пустое
    if (!countrySearchInput.val().trim()) {
      const placeholderText = countrySearchInput.data("placeholder");
      countrySearchInput.val(placeholderText).attr("readonly", true);
    }
  }

  // Загрузка списка стран из JSON и добавление в .country-list
  $.getJSON("https://raw.githubusercontent.com/umpirsky/country-list/master/data/ru/country.json", function (data) {
    const countryList = $(".country-list");
    countryList.empty();
    $.each(data, function (code, name) {
      countryList.append(`<div class="country-item" data-code="${code}">${name}</div>`);
    });
    countryList.append(`<div class="no-results" style="display: none;">Ничего не найдено</div>`);
  });

  // Обработчик поиска по странам
  countrySearchInput.on("input", function () {
    const searchQuery = $(this).val().toLowerCase();
    let hasResults = false;
    $(".country-item").each(function () {
      const countryName = $(this).text().toLowerCase();
      const matches = countryName.includes(searchQuery);
      $(this).toggle(matches);
      if (matches) hasResults = true;
    });
    $(".no-results").toggle(!hasResults);
    if (!searchQuery) {
      $(".country-item").show();
      $(".no-results").hide();
    }
  });

  // Обработчик клика по стране из списка
  $(document).on("click", ".country-item", function () {
    const selectedCountry = $(this).text();
    countrySearchInput.val(selectedCountry);
    closeCountryBox();
  });
});

/***/ }),

/***/ 583:
/***/ (function() {

//фильтры  в акккаунет поиск
$(document).ready(function () {
  $("#filter-btn").on("click", function () {
    $(".acc-search__filter").toggleClass("hidden");
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

//acc-search__filter-cl_list
$(document).ready(function () {
  const itemList = $(".acc-search__filter-cl_list");
  const items = ["Все", ...Array.from({
    length: 45
  }, (_, i) => i + 1)];
  items.forEach((item, index) => {
    const listItem = $(`<li><p class="txt24-days">${item}</p></li>`);
    if (index === 0) listItem.addClass("active");
    listItem.on("click", function () {
      itemList.find("li").removeClass("active");
      $(this).addClass("active");
    });
    itemList.append(listItem);
  });
});

/***/ }),

/***/ 289:
/***/ (function() {

//ДЛЯ ИНПУТА ДАТА ВЫДАЧИ
$(document).ready(function () {
  const passportDateInput = $("#passportDate");

  // Устанавливаем плейсхолдер при загрузке страницы
  passportDateInput.attr({
    type: "text",
    placeholder: "Дата выдачи"
  });

  //  меняем тип на date
  passportDateInput.on("focus", function () {
    $(this).attr("type", "date").removeAttr("placeholder");
  });

  //  возвращаем тип на text, если значение пустое
  passportDateInput.on("blur", function () {
    if (!$(this).val()) {
      $(this).attr({
        type: "text",
        placeholder: "Дата выдачи"
      });
    }
  });
});

// Функция для переключения видимости пароля
function togglePasswordVisibility() {
  $(document).on("click", ".toggle-password", function () {
    const inputField = $(this).siblings("input.form-input");
    const eyeIcon = $(this).find("img");
    if (inputField.length && eyeIcon.length) {
      if (inputField.attr("type") === "password") {
        inputField.attr("type", "text");
        eyeIcon.attr("src", "./assets/images/icon-eye-off.svg");
      } else {
        inputField.attr("type", "password");
        eyeIcon.attr("src", "./assets/images/icon-eye.svg");
      }
    }
  });
}
$(document).ready(function () {
  togglePasswordVisibility();
});

/***/ }),

/***/ 6:
/***/ (function() {

//карта
$(document).ready(function () {
  ymaps.ready(init);
  function init() {
    const map = new ymaps.Map("map", {
      center: [55.7158, 37.7911],
      zoom: 15,
      controls: ["zoomControl", "geolocationControl"]
    });
    const svgMarker = `
   <svg  class="custom-svg" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M58.7336 23.1666C55.2336 7.76658 41.8003 0.833252 30.0003 0.833252C30.0003 0.833252 30.0003 0.833252 29.967 0.833252C18.2003 0.833252 4.73365 7.73325 1.23365 23.1332C-2.66635 40.3332 7.86699 54.8999 17.4003 64.0666C20.9336 67.4666 25.467 69.1666 30.0003 69.1666C34.5336 69.1666 39.067 67.4666 42.567 64.0666C52.1003 54.8999 62.6336 40.3666 58.7336 23.1666ZM30.0003 39.8666C24.2003 39.8666 19.5003 35.1666 19.5003 29.3666C19.5003 23.5666 24.2003 18.8666 30.0003 18.8666C35.8003 18.8666 40.5003 23.5666 40.5003 29.3666C40.5003 35.1666 35.8003 39.8666 30.0003 39.8666Z" fill="#4EBDF5"/>
   </svg>
  `;
    map.panes.get("ground").getElement().style.filter = "grayscale(100%)";
    const customPlacemark = new ymaps.Placemark([55.7158, 37.7911], {
      balloonContent: "<b>Москва</b><br>Рязанский проспект 75, корп. 4, этаж 12"
    }, {
      iconLayout: "default#imageWithContent",
      iconContentLayout: ymaps.templateLayoutFactory.createClass(svgMarker),
      iconImageSize: [0, 0]
    });
    map.geoObjects.add(customPlacemark);
  }
});

/***/ }),

/***/ 621:
/***/ (function() {

$(document).ready(function () {
  const $marqueeList = $(".marquee__list");
  const itemWidth = $marqueeList.children().first().outerWidth(true);
  const totalWidth = itemWidth * $marqueeList.children().length;
  const animationDuration = totalWidth * 100;

  // Дублируем элементы, чтобы создать бесконечный эффект
  $marqueeList.append($marqueeList.html());
  $marqueeList.append($marqueeList.html());
  $marqueeList.append($marqueeList.html());
  $marqueeList.append($marqueeList.html());
  // Устанавливаем начальную позицию
  $marqueeList.css({
    width: totalWidth * 4 + "px",
    animation: `marquee ${animationDuration}ms linear infinite`
  });

  // CSS для анимации
  $("<style>").prop("type", "text/css").html(`
                        @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-${totalWidth * 4}px); }
                }
            `).appendTo("head");
});

/***/ }),

/***/ 947:
/***/ (function() {

$(".modal-close").on("click", closeModal);
$(".modal-close-menu").on("click", closeModal);
function closeModal() {
  $(".modal").removeClass("modal-active");
  $("body").removeClass("no-scroll");
}
$('[data-modal="modal-invoice"]').on("click", () => {
  $("#modal-invoice").addClass("modal-active");
  $("body").addClass("no-scroll");
});
$('[data-modal="modal-discuss"]').on("click", () => {
  $("#modal-discuss").addClass("modal-active");
  $("body").addClass("no-scroll");
});
$('[data-modal="modal-nl"]').on("click", () => {
  $("#modal-nl").addClass("modal-active");
  $("body").addClass("no-scroll");
});
$('[data-modal="modal-calc"]').on("click", () => {
  $("#modal-calc").addClass("modal-active");
  $("body").addClass("no-scroll");
});
$('[data-modal="modal-menu"]').on("click", () => {
  $("#modal-menu").addClass("modal-active");
  $("body").addClass("no-scroll");
});
$('[data-modal="modal-search"]').on("click", () => {
  $("#modal-search").addClass("modal-active");
  $("body").addClass("no-scroll");
});

//модалка аккаун-меню
$(document).ready(function () {
  $('[data-modal="modal-acc"]').on("click", function () {
    const modal = $("#modal-acc");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      modal.toggleClass("active");
      $("#menu-acc").toggleClass("visible hidden");
      $("#close-acc").toggleClass("hidden visible");
    }
  });
  $(".hide-mobile[data-modal='modal-acc']").on("click", function () {
    $("#modal-acc").toggleClass("active");
  });
});

//модалка каклькулятор
$(document).ready(function () {
  $(".modal-calc__right-item").on("click", ".modal-calc__right-btn", function () {
    $(this).closest(".modal-calc__right-item").find(".modal-calc__right-btn").removeClass("active");
    $(this).addClass("active");
  });
});

//модалка для карточки поиска
$(document).ready(function () {
  function adjustText() {
    var lettersToCutDesktop = 250; // Максимальное количество символов для десктопа
    var lettersToCutMobile = 170; // Максимальное количество символов для мобильных

    // Проверяем ширину экрана
    var isMobile = $(window).width() <= 768;

    // Устанавливаем нужное количество символов в зависимости от устройства
    var lettersToCut = isMobile ? lettersToCutMobile : lettersToCutDesktop;
    $(".modal-search__class").each(function () {
      var contentWrapper = $(this);
      var contentText = contentWrapper.data("original-text"); // Получаем полный текст из data-атрибута

      if (!contentText) {
        contentText = contentWrapper.text().trim();
        contentWrapper.data("original-text", contentText);
      }

      // Проверяем, если текст превышает максимальную длину
      if (contentText.length > lettersToCut) {
        var visibleText = contentText.substr(0, lettersToCut);
        contentWrapper.html(visibleText + "... <button class='txt-btn'>читать далее</button>");
      } else {
        contentWrapper.html(contentText);
      }
    });
  }
  adjustText();
  $(window).resize(function () {
    adjustText();
  });
  $(document).on("click", ".txt-btn", function (e) {
    e.preventDefault();
    var contentWrapper = $(this).parent();
    var originalText = contentWrapper.data("original-text");
    contentWrapper.html(originalText);
  });
});

/***/ }),

/***/ 606:
/***/ (function() {

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

/***/ }),

/***/ 719:
/***/ (function() {

//кнопка плюч минус
$(document).ready(function () {
  $(".rs-pp-classes__item-icon").on("click", function () {
    const button = $(this);
    const parentItem = button.closest(".rs-pp-classes__item");
    const spanElement = parentItem.find(".rs-pp-classes__item-desc span");
    button.find("img").toggle();
    spanElement.toggleClass("rs-pp-classes__item-span");
  });
});

//кнопка редактировать
$(document).ready(function () {
  $("#rs-pp-num .block-edit").on("click", function () {
    const container = $(this).closest("#rs-pp-num");
    const inputField = container.find(".form-input");
    if (inputField.prop("disabled")) {
      inputField.prop("disabled", false).focus();
      $(this).find("p").text("сохранить");
    } else {
      inputField.prop("disabled", true);
      $(this).find("p").text("редактировать");
    }
  });
});

/***/ }),

/***/ 564:
/***/ (function() {

//шаги Регистрация товарного знака, подача заявки
$(document).ready(function () {
  $(".reg-stage").each(function () {
    const stageContainer = $(this);

    // Скрываем все блоки с ID внутри текущего контейнера
    stageContainer.find(".reg-stage__box, .rs-pp__block").hide();

    // Показать первый активный блок
    const firstModal = stageContainer.find(".reg-stage__list li.active").data("modal");
    stageContainer.find("#" + firstModal).addClass("active").show();

    // Обработчик клика для переключения
    stageContainer.find(".reg-stage__list li").on("click", function () {
      const targetModal = $(this).data("modal");

      // Убрать активные классы и скрыть только нужные блоки
      stageContainer.find(".reg-stage__list li").removeClass("active");
      stageContainer.find(".blur-effect").removeClass("active");
      stageContainer.find(".reg-stage__box, .rs-pp__block").removeClass("active").hide();

      // Активировать текущий элемент и показать соответствующий блок
      $(this).addClass("active");
      $(this).find(".blur-effect").addClass("active");
      stageContainer.find("#" + targetModal).addClass("active").show();
    });
  });
});

//переключение кнопок плюс/минус
$(document).ready(function () {
  $(".rs-serv-item_icon").on("click", function () {
    const parentItem = $(this).closest(".rs-serv-item");
    const plusIcon = $(this).find("img").eq(0);
    const minusIcon = $(this).find("img").eq(1);
    const questionIcon = parentItem.find(".rs-serv-item_info img").eq(0);
    const questionIconActive = parentItem.find(".rs-serv-item_info img").eq(1);
    parentItem.toggleClass("rs-serv-item-dark");
    if (parentItem.hasClass("rs-serv-item-dark")) {
      plusIcon.hide();
      minusIcon.show();
      questionIcon.hide();
      questionIconActive.show();
    } else {
      plusIcon.show();
      minusIcon.hide();
      questionIcon.show();
      questionIconActive.hide();
    }
  });
});

//кнопки rs-invoice-opt
$(document).ready(function () {
  $(".rs-invoice-opt").on("click", function () {
    $(".rs-invoice-opt").removeClass("active");
    $(this).addClass("active");
  });
});

//закреп
//закрыть окно ошибка оплаты
$(document).ready(function () {
  $(".box-sticky-btn").on("click", function () {
    $(this).closest(".box-sticky-pay").hide();
  });
});

//кнопка открытия инфы о классе
$(document).ready(function () {
  $(".rs-classes__item-btn").on("click", function () {
    const $btn = $(this);
    const $hiddenContent = $btn.closest(".rs-classes__item").find(".rs-classes__item-hidden");
    $hiddenContent.slideToggle(300);
    $btn.toggleClass("active");
    $btn.find("svg").toggle();
  });
});

/***/ }),

/***/ 691:
/***/ (function() {

// 9. Детальная услуги
$(document).ready(function () {
  let currentIndex = 0;
  function updateContent(index) {
    // Скрываем все описания и изображения
    $(".reg-stages__description").hide().removeClass("active");
    $(".reg-stages__img").hide().removeClass("active");
    $(".reg-stages__item").removeClass("reg-stages__item-active");

    // Отображаем соответствующие элементы
    $(".reg-stages__description").eq(index).show().addClass("active");
    $(".reg-stages__img").eq(index).show().addClass("active");
    $(".reg-stages__item").eq(index).addClass("reg-stages__item-active");
  }

  // Обработчик клика по элементам списка
  $(".reg-stages__item").on("click", function () {
    currentIndex = $(this).index();
    updateContent(currentIndex);
  });

  // Обработчик клика на кнопку переключения
  $(".reg-stages__btn").on("click", function () {
    currentIndex = (currentIndex + 1) % $(".reg-stages__item").length;
    updateContent(currentIndex);
  });

  // Инициализация — показываем первый элемент
  updateContent(currentIndex);
});

/***/ }),

/***/ 772:
/***/ (function() {

//лк страницы для карточек
$(document).ready(function () {
  let cardsPerPage = $(window).width() > 768 ? 9 : 7;
  const totalCards = $(".search-result__item").length;
  let totalPages = Math.ceil(totalCards / cardsPerPage);
  let currentPage = 1;

  // Функция для переключения классов кнопок
  function updateButtons() {
    const $prevButton = $("#cards-prev");
    const $nextButton = $("#cards-next");
    $prevButton.toggleClass("inactive", currentPage === 1);
    $nextButton.toggleClass("inactive", currentPage === totalPages);
  }

  // Функция для отображения карточек на текущей странице
  function showCards() {
    $(".search-result__item").hide();
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    $(".search-result__item").slice(start, end).show();
    updateButtons();
  }

  // Функция для обновления номеров страниц
  function updatePageNumbers() {
    const pageNumbersContainer = $(".page-numbers");
    pageNumbersContainer.empty();
    for (let i = 1; i <= totalPages; i++) {
      pageNumbersContainer.append(`<li class="page-number txt24-days ${i === currentPage ? "active" : ""}">${i}</li>`);
    }
  }

  // Обработчик клика по кнопкам "Назад" и "Вперед"
  $(".slider-button").on("click", function () {
    if ($(this).hasClass("inactive")) return;
    currentPage = $(this).is("#cards-next") ? currentPage + 1 : currentPage - 1;
    showCards();
    updatePageNumbers();
  });

  // Обработчик клика по номеру страницы
  $(document).on("click", ".page-number", function () {
    currentPage = parseInt($(this).text(), 10);
    showCards();
    updatePageNumbers();
  });
  $(window).on("resize", function () {
    const newCardsPerPage = $(window).width() > 768 ? 9 : 7;
    if (newCardsPerPage !== cardsPerPage) {
      cardsPerPage = newCardsPerPage;
      totalPages = Math.ceil(totalCards / cardsPerPage);
      currentPage = 1;
      showCards();
      updatePageNumbers();
    }
  });
  showCards();
  updatePageNumbers();
});

/***/ }),

/***/ 387:
/***/ (function() {

// Функция для перевода rem в px
function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Универсальная функция для инициализации Swiper с кнопками
function initializeSwiperWithButtons(swiperSelector, prevButtonId, nextButtonId, breakpoints) {
  var swiperInstance = new Swiper(swiperSelector, {
    slidesPerView: 1,
    spaceBetween: remToPx(2.8),
    loop: false,
    breakpoints: breakpoints || {
      769: {
        slidesPerView: 4
      }
    }
  });

  // Обновление состояния кнопок
  function updateButtons() {
    if (swiperInstance.isBeginning) {
      $(prevButtonId).addClass("inactive");
    } else {
      $(prevButtonId).removeClass("inactive");
    }
    if (swiperInstance.isEnd) {
      $(nextButtonId).addClass("inactive");
    } else {
      $(nextButtonId).removeClass("inactive");
    }
  }

  // Начальная проверка состояния кнопок
  updateButtons();

  // Обработчики событий для кнопок
  $(prevButtonId).on("click", function () {
    swiperInstance.slidePrev();
  });
  $(nextButtonId).on("click", function () {
    swiperInstance.slideNext();
  });

  // Обновление состояния кнопок при изменении слайда
  swiperInstance.on("slideChange", updateButtons);

  // Обновление состояния кнопок при изменении размера экрана
  $(window).on("resize", function () {
    setTimeout(updateButtons, 300);
  });
  return swiperInstance;
}
$(document).ready(function () {
  // Инициализация слайдера для блога
  initializeSwiperWithButtons(".blog__slider", "#blog-prev", "#blog-next", {
    769: {
      slidesPerView: 4
    }
  });

  // Инициализация слайдера для команды
  initializeSwiperWithButtons(".team__slider", "#team-prev", "#team-next", {
    769: {
      slidesPerView: 4
    }
  });

  // Инициализация слайдера для отзывов
  initializeSwiperWithButtons(".reviews__slider", "#reviews-prev", "#reviews-next", {
    769: {
      slidesPerView: 3
    }
  });
});

/***/ }),

/***/ 918:
/***/ (function() {

$(document).ready(function () {
  let currentStep = 1;
  let isTooltipActive = false;
  $(".tooltip-block").hide();

  // Функция для показа подсказки
  function showTooltip(step) {
    $(".overlay").fadeIn();
    let tooltipSelector = `#tooltip${step}`;
    let highlightSelector = `#highlight${step}`;
    if (step === 1 || step === 4) {
      if (step === 1 && $(window).width() <= 768) {
        tooltipSelector = `#tooltip${step}.hide-desktop`;
      } else if (step === 1) {
        tooltipSelector = `#tooltip${step}.hide-mobile`;
      }
      if (step === 4) {
        if ($(window).width() <= 768) {
          tooltipSelector = `#tooltip${step}.hide-desktop`;
          highlightSelector = `#highlight${step}.hide-desktop`;
        } else {
          tooltipSelector = `#tooltip${step}.hide-mobile`;
          highlightSelector = `#highlight${step}.hide-mobile`;
        }
      }
    }
    $(tooltipSelector).fadeIn().css("display", "flex");
    $(highlightSelector).addClass(`highlight highlight${step}`);
    scrollToTooltip(tooltipSelector); // Скроллим к блоку с подсказкой

    lockSteps(); //юлок шагов
    isTooltipActive = true;
    console.log(`Показ подсказки для шага ${step}`);
  }

  // Функция для скрытия подсказки
  function hideTooltip(step) {
    $(".overlay").fadeOut();
    let tooltipSelector = `#tooltip${step}`;
    let highlightSelector = `#highlight${step}`;
    if (step === 1 || step === 4) {
      if (step === 1) {
        tooltipSelector = `#tooltip${step}.hide-desktop, #tooltip${step}.hide-mobile`;
      }
      if (step === 4) {
        tooltipSelector = `#tooltip${step}.hide-desktop, #tooltip${step}.hide-mobile`;
        highlightSelector = `#highlight${step}.hide-desktop, #highlight${step}.hide-mobile`;
      }
    }
    $(tooltipSelector).fadeOut().css("display", "none");
    $(highlightSelector).removeClass(`highlight highlight${step}`);
    unlockSteps();
    isTooltipActive = false;
    console.log(`Скрытие подсказки для шага ${step}`);
  }
  function lockSteps() {
    $(".reg-stage__list .reg-stage__item").css("pointer-events", "none");
  }
  function unlockSteps() {
    $(".reg-stage__list .reg-stage__item").css("pointer-events", "auto");
  }
  function scrollToTooltip(tooltipSelector) {
    const $tooltipBlock = $(tooltipSelector).closest(".tooltip-block");
    if ($tooltipBlock.length) {
      $("html, body").animate({
        scrollTop: $tooltipBlock.offset().top - ($(window).height() / 2 - $tooltipBlock.outerHeight() / 2)
      }, 500);
    }
  }
  $("[data-modal='r2s']").on("click", function () {
    if (!isTooltipActive) {
      currentStep = 1;
      showTooltip(currentStep);
    }
  });
  $(".tooltip-next").on("click", function () {
    if ($(this).hasClass("tooltip-end")) {
      hideTooltip(currentStep);
    } else {
      const nextStep = $(this).data("target");
      hideTooltip(currentStep);
      currentStep = nextStep;
      showTooltip(currentStep);
    }
  });
  $(".tooltip-close, .overlay").on("click", function () {
    hideTooltip(currentStep);
  });
  $(".reg-stage__list").on("click", ".reg-stage__item", function (e) {
    if (isTooltipActive) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
});

/***/ }),

/***/ 546:
/***/ (function() {

class FormValidator {
  constructor(formSelector, validators) {
    this.$form = $(formSelector);
    this.validators = validators;
    this.formId = this.$form.attr("id");
    this.formInteractions = {}; // Для отслеживания взаимодействий
    this.phoneMask = null;
    this.init();
  }
  init() {
    this.setupPhoneMask();
    this.setupEventListeners();
    this.toggleSubmitButton(); // Изначально блокируем кнопку
  }

  setupPhoneMask() {
    const phoneInput = this.$form.find("#phone");
    if (phoneInput.length) {
      this.phoneMask = IMask(phoneInput[0], {
        mask: "+7 (000) 000-00-00"
      });
    }
  }
  getPhoneUnmaskedValue() {
    return this.phoneMask ? this.phoneMask.unmaskedValue : "";
  }
  toggleError(field, errorMessageId) {
    let message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    const errorField = this.$form.find(`#${errorMessageId}`);

    // Привязываем стандартный класс ошибки к инпуту
    field.toggleClass("err-form", message !== "");

    // Дополнительная логика для файлового поля
    if (field.attr("type") === "file") {
      // Находим связанный label (если есть)
      const label = this.$form.find(`label[for="${field.attr("id")}"]`);
      if (label.length) {
        label.toggleClass("upload-label-err", message !== ""); // Добавляем/убираем класс ошибки для label
      } else {
        field.closest("label").toggleClass("upload-label-err", message !== "");
      }
    }

    // Управляем сообщением об ошибке
    message ? errorField.text(message).show() : errorField.hide();
  }
  validateField(field, fieldName) {
    let force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (this.formInteractions[fieldName] || force) {
      const fieldValidators = typeof this.validators[fieldName] === "function" ? this.validators[fieldName](this) : this.validators[fieldName];
      const isRequired = field.prop("required");
      let value = field.val(); // Получаем значение поля

      // Вот эта часть — обработка файлов:
      if (field.attr("type") === "file") {
        value = ""; // Для файлов передаем пустое значение в валидацию
      } else if (field.attr("readonly")) {
        value = field.val(); // Для readonly полей значение из val
      }

      const errorMessage = this.runValidators(value, fieldValidators, isRequired, field);
      this.toggleError(field, `${fieldName}-error`, errorMessage);
      return !errorMessage;
    }
    return false;
  }
  runValidators(value, validators, isRequired, field) {
    if (!isRequired && value.trim() === "") return "";
    for (const {
      test,
      message
    } of validators) {
      if (!test(value, field)) return message; // Передаем поле field в тесты для проверки файлов
    }

    return "";
  }
  validateConsent() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const consentField = this.$form.find("#dataConsent");
    if (!consentField.length) return true;
    const consentChecked = consentField.is(":checked");
    if (this.formInteractions["dataConsent"] || force) {
      this.toggleError(consentField, "consent-error", consentChecked ? "" : "Вы должны согласиться на обработку персональных данных");
    }
    return consentChecked;
  }
  checkFormValidity() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const fieldsToValidate = this.$form.find("input:visible, textarea:visible") // Учитываем только видимые поля
    .filter((_, el) => this.validators[el.id] !== undefined);
    let allFieldsValid = true;
    fieldsToValidate.each((_, input) => {
      const $input = $(input);
      const fieldIsValid = this.validateField($input, $input.attr("id"), force);
      if (!fieldIsValid) {
        allFieldsValid = false;
      }
    });
    const consentValid = this.validateConsent(force);
    const isFormValid = allFieldsValid && consentValid;
    this.toggleSubmitButton(isFormValid);
    return isFormValid;
  }
  toggleSubmitButton() {
    let isValid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const submitButton = this.$form.find('button[type="submit"]');
    if (isValid) {
      submitButton.removeClass("button-inactive");
    } else {
      submitButton.addClass("button-inactive");
    }
  }
  setupEventListeners() {
    // Слушаем события input и blur для текстовых полей и текстовых областей
    this.$form.on("input blur", "input:visible, textarea:visible", e => {
      const field = $(e.target);
      const fieldName = field.attr("id");
      this.formInteractions[fieldName] = true;
      if (this.validators[fieldName]) {
        this.validateField(field, fieldName);
      }
      this.checkFormValidity();
    });

    // Слушаем изменение для поля согласия (чекбокс)
    this.$form.on("change", "#dataConsent", () => {
      this.formInteractions["dataConsent"] = true;
      this.checkFormValidity();
    });

    // Обработка изменения для файлового инпута
    this.$form.on("change", "input[type='file']", e => {
      const field = $(e.target);
      const fieldName = field.attr("id");
      this.formInteractions[fieldName] = true;
      if (this.validators[fieldName]) {
        this.validateField(field, fieldName);
      }
      this.checkFormValidity();
    });

    // Слушаем событие отправки формы
    this.$form.on("submit", e => {
      e.preventDefault();
      const isFormValid = this.checkFormValidity(true);
      if (isFormValid) {
        const modalId = this.$form.find('button[type="submit"]').data("modal");

        // Закрываем текущее модальное окно
        this.$form.closest(".modal").removeClass("modal-active");

        // Сбрасываем форму
        this.$form[0].reset();
        this.resetFormState();

        // Открываем модальное окно "Спасибо" после небольшой задержки
        if (modalId) {
          $(`#${modalId}`).addClass("modal-active");
        }
      }
    });
  }
  resetFormState() {
    this.formInteractions = {};
    this.toggleSubmitButton(false);
    if (this.phoneMask) {
      this.phoneMask.destroy();
      this.setupPhoneMask();
    }
  }
}

//для переключения форм
$(document).ready(function () {
  // Переключение секций формы
  $(".account-form-option").on("click", function (event) {
    event.preventDefault();
    const targetFormId = $(this).data("target"); // Получаем целевой блок
    const formContainer = $(this).closest(".account-form");

    // Снимаем активный класс с кнопок
    formContainer.find(".account-form-option").removeClass("active");
    $(this).addClass("active");

    // Скрываем все секции с классом account-form-block и показываем только целевую
    formContainer.find(".account-form-block").each(function () {
      const block = $(this);
      if (block.attr("id")) {
        block.hide(); // Скрываем блоки с ID
      }
    });

    formContainer.find(`.account-form-block[id="${targetFormId}"]`).show(); // Показываем целевой блок

    // Включаем чекбокс "Я самозанятый" только для блока individ
    const selfEmployedCheckbox = formContainer.find("#selfEmployed");
    if (targetFormId === "individ") {
      selfEmployedCheckbox.closest(".form-label").show(); // Показываем чекбокс
    } else {
      selfEmployedCheckbox.prop("checked", false); // Сбрасываем чекбокс
      selfEmployedCheckbox.closest(".form-label").hide(); // Скрываем чекбокс
    }
  });

  // Инициализация: показываем только первую форму, остальные скрываем только если у них есть ID
  const formContainer = $(".account-form"); // Получаем форму
  const firstOption = formContainer.find(".account-form-option").first(); // Находим первую кнопку
  firstOption.addClass("active"); // Делаем её активной
  const firstTarget = firstOption.data("target"); // Получаем её target

  formContainer.find(".account-form-block").each(function () {
    const block = $(this);
    if (block.attr("id") && block.attr("id") !== firstTarget) {
      block.hide(); // Скрываем только блоки с ID
    }
  });

  formContainer.find(`.account-form-block[id="${firstTarget}"]`).show(); // Показываем первую связанную секцию
});

//переключение и собирание инфы с левого блока r1s
$(document).ready(function () {
  $(".r1s__left-btn").on("click", function (event) {
    event.preventDefault();
    const targetFormId = $(this).data("target");
    const formContainer = $(this).closest(".r1s__left");

    // Сбрасываем активность со всех кнопок и восстанавливаем их изображения
    formContainer.find(".r1s__left-btn").each(function () {
      $(this).removeClass("active");
      const imgElements = $(this).find("img");
      imgElements.eq(0).hide(); // Скрываем активное изображение
      imgElements.eq(1).show(); // Показываем неактивное изображение
    });

    // Устанавливаем активность на текущую кнопку
    $(this).addClass("active");
    const currentImgElements = $(this).find("img");
    currentImgElements.eq(0).show(); // Показываем активное изображение
    currentImgElements.eq(1).hide(); // Скрываем неактивное изображение

    // Скрываем все формы и показываем только целевую
    formContainer.find(".r1s__left-form").hide();
    $(`#${targetFormId}`).show();
  });

  // Инициализация: показываем первую кнопку и связанную с ней форму
  const firstButton = $(".r1s__left-btn.active");
  const firstTarget = firstButton.data("target");
  $(`#${firstTarget}`).show();
});

//ошибки для валидации
const validationRules = {
  login: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[a-zA-Z0-9._-]+$/.test(val),
    message: "Логин может содержать только латинские буквы, цифры, точки, дефисы и подчеркивания"
  }, {
    test: val => val.length >= 5,
    message: "Логин должен содержать не менее 5 символов"
  }, {
    test: val => val.length <= 20,
    message: "Логин не должен превышать 20 символов"
  }],
  password: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => val.length >= 8,
    message: "Пароль должен содержать не менее 8 символов"
  }, {
    test: val => /[A-Z]/.test(val),
    message: "Пароль должен содержать хотя бы одну заглавную букву"
  }, {
    test: val => /[a-z]/.test(val),
    message: "Пароль должен содержать хотя бы одну строчную букву"
  }, {
    test: val => /[0-9]/.test(val),
    message: "Пароль должен содержать хотя бы одну цифру"
  }, {
    test: val => /[\W_]/.test(val),
    message: "Пароль должен содержать хотя бы один специальный символ"
  }],
  applicantAddressTranslit: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[A-Za-z0-9\s\.,\-()]+$/.test(val),
    message: "Транслитерация адреса должна содержать только латинские буквы, цифры и символы (,.-())"
  }, {
    test: val => val.length <= 150,
    message: "Адрес не должен превышать 150 символов"
  }],
  imageUpload: [{
    test: (val, field) => field[0].files.length > 0,
    message: "Файл обязателен для загрузки"
  }, {
    test: (val, field) => {
      if (field[0].files.length > 0) {
        const file = field[0].files[0];
        return file.size <= 10 * 1024 * 1024; // 10 МБ
      }

      return true; // Если файла нет, пропускаем эту проверку
    },

    message: "Файл должен быть не больше 10МБ"
  }, {
    test: (val, field) => {
      if (field[0].files.length > 0) {
        const file = field[0].files[0];
        return ["image/jpeg", "image/png"].includes(file.type);
      }
      return true; // Если файла нет, пропускаем эту проверку
    },

    message: "Файл должен быть в формате JPEG или PNG"
  }],
  applicantNameTranslit: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[A-Za-z0-9\s\.,\-()]+$/.test(val),
    message: "Транслитерация наименования заявителя должна содержать только латинские буквы, цифры и символы (,.-())"
  }, {
    test: val => val.length <= 100,
    message: "Транслитерация наименования не должна превышать 100 символов"
  }],
  applicantName: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁё0-9\s\.,\-()]+$/.test(val),
    message: "Наименование заявителя должно содержать только буквы, цифры, пробелы и специальные символы (,.-())"
  }, {
    test: val => val.length <= 100,
    message: "Наименование заявителя не должно превышать 100 символов"
  }],
  fullRepresentativeName: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/.test(val),
    message: "ФИО должно содержать три слова: Фамилия Имя Отчество"
  }],
  phone: function (formInstance) {
    return [{
      test: () => formInstance.getPhoneUnmaskedValue().length > 0,
      message: "Это поле обязательно"
    }, {
      test: () => formInstance.getPhoneUnmaskedValue().length === 10,
      message: "Телефон должен содержать 10 цифр"
    }];
  },
  name: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁёA-Za-z\s]+$/.test(val),
    message: "Имя должно состоять только из букв"
  }],
  email: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val),
    message: "Неверный формат email"
  }],
  question: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => val.length >= 10,
    message: "Вопрос должен содержать не менее 10 символов"
  }, {
    test: val => val.length <= 300,
    message: "Вопрос не должен превышать 100 символов"
  }],
  surname: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁё\s]+$/.test(val),
    message: "Фамилия должна содержать только буквы"
  }],
  patronymic: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁё\s]+$/.test(val),
    message: "Отчество должно содержать только буквы"
  }],
  fullName: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-ЯЁ][а-яё]+\s[А-ЯЁ]\.[А-ЯЁ]\.$/.test(val),
    message: "ФИО должно быть в формате: Фамилия И.О."
  }],
  registrationAddress: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }],
  postalAddress: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }],
  issuedBy: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁёA-Za-z\s]+$/.test(val),
    message: "Кем выдан должно содержать только буквы и пробелы"
  }],
  passportSeries: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{4}$/.test(val),
    message: "Серия паспорта должна содержать 4 цифры"
  }],
  passportNumber: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{6}$/.test(val),
    message: "Номер паспорта должен содержать 6 цифр"
  }],
  passportDate: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{4}-\d{2}-\d{2}$/.test(val),
    message: "Дата должна быть в формате ГГГГ-ММ-ДД"
  }],
  departmentCode: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{3}-\d{3}$/.test(val),
    message: "Код подразделения должен быть в формате 000-000"
  }],
  snils: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{3}-\d{3}-\d{3} \d{2}$/.test(val),
    message: "СНИЛС должен быть в формате 000-000-000 00"
  }],
  inn: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{10}$|^\d{12}$/.test(val),
    message: "ИНН должен содержать 10 или 12 цифр"
  }],
  bankName: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁёA-Za-z0-9\s,.-]+$/.test(val),
    message: "Название банка может содержать только буквы, цифры и символы ,.-"
  }],
  bik: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{9}$/.test(val),
    message: "БИК должен содержать 9 цифр"
  }],
  accountNumber: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{20}$/.test(val),
    message: "Расчетный счет должен содержать 20 цифр"
  }],
  ogrnip: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{15}$/.test(val),
    message: "ОГРНИП должен содержать 15 цифр"
  }],
  kpp: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{9}$/.test(val),
    message: "КПП должен содержать 9 цифр"
  }],
  organization: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁёA-Za-z0-9\s]+$/.test(val),
    message: "Наименование компании может содержать только буквы, цифры и пробелы"
  }],
  representative: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁё\s]+$/.test(val),
    message: "Поле должно содержать только буквы"
  }],
  basedOn: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^[А-Яа-яЁёA-Za-z0-9\s,.-]+$/.test(val),
    message: "Поле может содержать только буквы, цифры и символы ,.-"
  }],
  ogrn: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d{13}$/.test(val),
    message: "ОГРН должен содержать 13 цифр"
  }],
  regNumber: [{
    test: val => val.trim() !== "",
    message: "Это поле обязательно"
  }, {
    test: val => /^\d+$/.test(val),
    message: "Поле должно содержать только цифры"
  }]
};

// Использование:  форма "form-reg-stage"
$(document).ready(() => {
  const formValidators = {
    organization: validationRules.organization,
    ogrn: validationRules.ogrn,
    registRusAddress: validationRules.registrationAddress,
    registrIPAddress: validationRules.registrationAddress,
    registrationAddress: validationRules.registrationAddress,
    registrationAddressIntl: validationRules.registrationAddress,
    servRus: validationRules.question,
    servLegal: validationRules.question,
    servEntrepr: validationRules.question,
    servIntl: validationRules.question,
    fullRepresentativeName: validationRules.fullRepresentativeName,
    ogrnip: validationRules.ogrnip,
    snils: validationRules.snils,
    inn: validationRules.inn,
    surname: validationRules.surname,
    name: validationRules.name,
    patronymic: validationRules.patronymic,
    applicantName: validationRules.applicantName,
    applicantNameTranslit: validationRules.applicantNameTranslit,
    imageUpload: validationRules.imageUpload,
    imageUpload2: validationRules.imageUpload,
    applicantAddressTranslit: validationRules.applicantAddressTranslit,
    trademarkName: validationRules.name,
    trademarkName2: validationRules.name
  };
  new FormValidator("#form-reg-stage", formValidators);
});

// Использование:  форма support
$(document).ready(() => {
  const formValidators = {
    phone: validationRules.phone,
    name: validationRules.name,
    email: validationRules.email,
    question: validationRules.question
  };
  new FormValidator("#form-support", formValidators);
});

// Использование:  форма договора(form-agr)
$(document).ready(() => {
  const formValidators = {
    surname: validationRules.surname,
    name: validationRules.name,
    patronymic: validationRules.patronymic,
    fullName: validationRules.fullName,
    registrationAddress: validationRules.registrationAddress,
    postalAddress: validationRules.registrationAddress,
    issuedBy: validationRules.issuedBy,
    passportSeries: validationRules.passportSeries,
    passportNumber: validationRules.passportNumber,
    passportDate: validationRules.passportDate,
    departmentCode: validationRules.departmentCode
  };
  new FormValidator("#form-agr", formValidators);
});

// Использование:  форма партнерская программа(form-partner)
$(document).ready(() => {
  const formValidators = {
    entrSurname: validationRules.surname,
    surname: validationRules.surname,
    name: validationRules.name,
    entrName: validationRules.surname,
    patronymic: validationRules.patronymic,
    entrPatronymic: validationRules.patronymic,
    snils: validationRules.snils,
    inn: validationRules.inn,
    legalInn: validationRules.inn,
    entrInn: validationRules.inn,
    registrationAddress: validationRules.registrationAddress,
    legalAddress: validationRules.registrationAddress,
    entrAddress: validationRules.registrationAddress,
    passportSeries: validationRules.passportSeries,
    passportNumber: validationRules.passportNumber,
    passportDate: validationRules.passportDate,
    issuedBy: validationRules.issuedBy,
    ogrn: validationRules.ogrn,
    bankName: validationRules.bankName,
    bik: validationRules.bik,
    accountNumber: validationRules.accountNumber,
    ogrnip: validationRules.ogrnip,
    kpp: validationRules.kpp,
    organization: validationRules.organization,
    representative: validationRules.representative,
    basedOn: validationRules.basedOn
  };
  new FormValidator("#form-partner", formValidators);
});

//Использование: форма подписки (form-nl)
$(document).ready(() => {
  const formValidators = {
    email: validationRules.email
  };
  new FormValidator("#form-nl", formValidators);
});

//Использование: форма логина(form-signin)
$(document).ready(() => {
  const formValidators = {
    login: validationRules.login,
    password: validationRules.password
  };
  new FormValidator("#form-signin", formValidators);
});

//Использование: форма логина(form-signup)
$(document).ready(() => {
  const formValidators = {
    name: validationRules.name,
    email: validationRules.email,
    phone: validationRules.phone
  };
  new FormValidator("#form-signup", formValidators);
});

//Использование: форма логина(form-password)
$(document).ready(() => {
  const formValidators = {
    email: validationRules.email
  };
  new FormValidator("#form-password", formValidators);
});

//Использование: форма регистрационный номер(form-reg-number)
$(document).ready(() => {
  const formValidators = {
    regNumber: validationRules.regNumber
  };
  const formSelectors = ["#form-reg-number", "#form-reg-number-2", "#form-reg-number-3"];
  formSelectors.forEach(formSelector => {
    new FormValidator(formSelector, formValidators);
  });
});

//Использование: форма логина(form-recomm)
$(document).ready(() => {
  const formValidators = {
    recomm: validationRules.question
  };
  const formSelectors = ["#form-recomm", "#form-recomm2"];
  formSelectors.forEach(formSelector => {
    new FormValidator(formSelector, formValidators);
  });
});

/***/ }),

/***/ 609:
/***/ (function() {

$(document).ready(function () {
  // Отображаем первую картинку и описание по умолчанию
  $(".workflow__description").hide().eq(0).show();
  $(".workflow__img").removeClass("active").eq(0).addClass("active");
  $(".workflow__item").eq(0).addClass("workflow__item-active");

  // Обработчик клика на кнопки
  $(".workflow__item").on("click", function () {
    var index = $(this).index();

    // Скрываем все описания и изображения, убираем активные классы
    $(".workflow__description").hide();
    $(".workflow__img").removeClass("active");
    $(".workflow__item").removeClass("workflow__item-active");

    // Отображаем соответствующий текст и изображение
    $(".workflow__description").eq(index).show();
    $(".workflow__img").eq(index).addClass("active");
    $(this).addClass("workflow__item-active");
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _js_acc_partner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(810);
/* harmony import */ var _js_acc_partner_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_acc_partner_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_account_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);
/* harmony import */ var _js_account_data_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_account_data_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_account_req_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(535);
/* harmony import */ var _js_account_req_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_account_req_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_blog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(978);
/* harmony import */ var _js_blog_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_blog_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_cat_pricing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(247);
/* harmony import */ var _js_cat_pricing_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_cat_pricing_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(745);
/* harmony import */ var _js_comment_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_comment_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_country_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(862);
/* harmony import */ var _js_country_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_country_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(583);
/* harmony import */ var _js_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_form_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(289);
/* harmony import */ var _js_form_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_form_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_marquee_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);
/* harmony import */ var _js_marquee_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_marquee_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(947);
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_modal_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_questions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(606);
/* harmony import */ var _js_questions_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_questions_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_reg_stage_pp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(719);
/* harmony import */ var _js_reg_stage_pp_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_reg_stage_pp_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_reg_stage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(564);
/* harmony import */ var _js_reg_stage_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_reg_stage_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _js_reg_stages_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(691);
/* harmony import */ var _js_reg_stages_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_js_reg_stages_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _js_search_result_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(772);
/* harmony import */ var _js_search_result_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_js_search_result_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(387);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _js_tooltip_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(918);
/* harmony import */ var _js_tooltip_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_js_tooltip_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _js_validateForm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(546);
/* harmony import */ var _js_validateForm_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_js_validateForm_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _js_workflow_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(609);
/* harmony import */ var _js_workflow_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_js_workflow_js__WEBPACK_IMPORTED_MODULE_20__);























//Кнопки acc-search-cat
$(document).ready(function () {
  $(".acc-search-cat__item").on("click", function () {
    $(".acc-search-cat__item").removeClass("active");
    $(this).addClass("active");
  });
});

//плейсхолдер поиска class-select.html, class-dtl.html
$(document).ready(function () {
  function updatePlaceholders() {
    const tmInput = $(".tm-input");
    const searchResultInput = $(".search-result__input");
    if ($(window).width() < 768) {
      tmInput.attr("placeholder", "Поиск по услугам");
      searchResultInput.attr("placeholder", "Поиск по услугам");
    } else {
      tmInput.attr("placeholder", tmInput.data("original-placeholder"));
      searchResultInput.attr("placeholder", searchResultInput.data("original-placeholder"));
    }
  }
  $(".tm-input").each(function () {
    $(this).data("original-placeholder", $(this).attr("placeholder"));
  });
  $(".search-result__input").each(function () {
    $(this).data("original-placeholder", $(this).attr("placeholder"));
  });
  updatePlaceholders();
  $(window).on("resize", function () {
    updatePlaceholders();
  });
});

//для счетчика калькулятора
$(document).ready(function () {
  $("#counter-plus").on("click", function () {
    const $counter = $("#counter-value");
    let currentValue = parseInt($counter.text(), 10);
    $counter.text(currentValue + 1);
  });
  $("#counter-minus").on("click", function () {
    const $counter = $("#counter-value");
    let currentValue = parseInt($counter.text(), 10);
    if (currentValue > 1) {
      $counter.text(currentValue - 1);
    }
  });
});

//слайдер для dtl-srvcs
$(document).ready(function () {
  let swiperInstance = null;
  function initSwiper() {
    if (window.innerWidth <= 768 && !swiperInstance) {
      swiperInstance = new Swiper(".dtl-srvcs-swiper-container", {
        slidesPerView: 1.1
      });
    } else if (window.innerWidth > 768 && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  // Запускаем Swiper при загрузке
  initSwiper();

  // Перезапускаем Swiper при изменении размера окна
  $(window).on("resize", initSwiper);
});
}();
/******/ })()
;