// кнопка blog в мобильной версии

$(document).ready(function () {
  $(".blog__button-mobile").click(function () {
    $(this)
      .closest(".blog__slide-info")
      .find(".blog__slide-text")
      .toggleClass("text-active");
  });
});
