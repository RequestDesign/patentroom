// компонент blog
$(document).ready(function () {
  var mySwiperBlog = new Swiper(".blog__slider", {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: false,

    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
  });

  $("#blog-prev").on("click", function () {
    mySwiperBlog.slidePrev();
  });

  $("#blog-next").on("click", function () {
    mySwiperBlog.slideNext();
  });
});

// Компонент team
$(document).ready(function () {
  var mySwiperTeam = new Swiper(".team__slider", {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: false,

    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
  });

  $("#team-prev").on("click", function () {
    mySwiperTeam.slidePrev();
  });

  $("#team-next").on("click", function () {
    mySwiperTeam.slideNext();
  });
});

// Компонент reviews
$(document).ready(function () {
  var mySwiperReviews = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: false,

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });

  $("#reviews-prev").on("click", function () {
    mySwiperReviews.slidePrev();
  });

  $("#reviews-next").on("click", function () {
    mySwiperReviews.slideNext();
  });
});
