$(".modal-close").on("click", closeModal);
$(".modal-close-menu").on("click", closeModal);
function closeModal() {
  $(".modal").removeClass("modal-active");
  $("body").removeClass("no-scroll");
}

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
