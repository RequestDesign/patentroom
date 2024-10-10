$(".modal-close").on("click", closeModal);

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
