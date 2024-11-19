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
      searchResultInput.attr(
        "placeholder",
        searchResultInput.data("original-placeholder")
      );
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
