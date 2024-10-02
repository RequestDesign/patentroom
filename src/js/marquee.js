$(document).ready(function () {
  const $marqueeList = $(".marquee__list");
  const itemWidth = $marqueeList.children().first().outerWidth(true); // ширина одного элемента с учетом отступов
  const totalWidth = itemWidth * $marqueeList.children().length; // общая ширина
  const animationDuration = totalWidth * 20; // длительность анимации (можно подстроить)

  // Дублируем элементы, чтобы создать бесконечный эффект
  $marqueeList.append($marqueeList.html());
  $marqueeList.append($marqueeList.html());
  $marqueeList.append($marqueeList.html());
  $marqueeList.append($marqueeList.html());
  // Устанавливаем начальную позицию
  $marqueeList.css({
    width: totalWidth * 4 + "px", // удваиваем ширину
    animation: `marquee ${animationDuration}ms linear infinite`,
  });

  // CSS для анимации
  $("<style>")
    .prop("type", "text/css")
    .html(
      `
                        @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-${totalWidth * 4}px); }
                }
            `
    )
    .appendTo("head");
});
