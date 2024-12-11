import './index.css'
import './js/acc-partner.js';
import './js/account-data.js'; 
import './js/account-req.js';  
import './js/blog.js';
import './js/cat-pricing.js';  
import './js/comment.js';      
import './js/country.js';      
import './js/filter.js';       
import './js/form.js';
import './js/map.js';
import './js/marquee.js';      
import './js/modal.js';        
import './js/questions.js';    
import './js/reg-stage-pp.js'; 
import './js/reg-stage.js';    
import './js/reg-stages.js';   
import './js/search-result.js';
import './js/slider.js';
import './js/tooltip.js';
import './js/validateForm.js';
import './js/workflow.js';

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
        slidesPerView: 1.1,
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
