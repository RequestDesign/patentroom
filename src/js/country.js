$(document).ready(function () {
  const countrySearchInput = $(".country-search-input");
  const countryBox = $("#country-box");
  const arrowDown = $(".arrow-country-down");
  const arrowUp = $(".arrow-country-up");

  // Переключение видимости country-box при клике на стрелку
  arrowDown.on("click", function () {
    toggleCountryBox(); // Вызов функции для переключения видимости списка
  });

  arrowUp.on("click", function () {
    toggleCountryBox(); // Закрытие списка при нажатии на стрелку вверх
  });

  // Открытие country-box при клике на input, но без повторного закрытия
  countrySearchInput.on("click", function () {
    if (countryBox.is(":hidden")) {
      countrySearchInput.val("").removeAttr("readonly");
      countryBox.show();
      arrowDown.hide();
      arrowUp.show();
      $(".country-item").show(); // Показываем все страны при открытии
      $(".no-results").hide(); // Скрываем сообщение "Ничего не найдено"
    }
  });

  // Закрытие списка стран при клике вне его области
  $(document).on("click", function (event) {
    const target = $(event.target);
    if (!target.closest(".country-select-container").length) {
      closeCountryBox(); // Закрываем список
    }
  });

  // Функция переключения видимости country-box
  function toggleCountryBox() {
    countryBox.toggle();
    arrowDown.toggle();
    arrowUp.toggle();

    if (countryBox.is(":visible")) {
      countrySearchInput.val("").removeAttr("readonly");
      $(".country-item").show();
      $(".no-results").hide();
    } else {
      if (!countrySearchInput.val().trim()) {
        countrySearchInput.val("Все страны").attr("readonly", true);
      }
    }
  }

  // Функция закрытия country-box
  function closeCountryBox() {
    countryBox.hide();
    arrowDown.show();
    arrowUp.hide();

    if (!countrySearchInput.val().trim()) {
      countrySearchInput.val("Все страны").attr("readonly", true);
    }
  }

  // Загрузка списка стран из JSON и добавление в .country-list
  $.getJSON(
    "https://raw.githubusercontent.com/umpirsky/country-list/master/data/ru/country.json",
    function (data) {
      const countryList = $(".country-list");
      countryList.empty();

      $.each(data, function (code, name) {
        countryList.append(
          `<div class="country-item" data-code="${code}">${name}</div>`
        );
      });

      countryList.append(
        `<div class="no-results" style="display: none;">Ничего не найдено</div>`
      );
    }
  );

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
