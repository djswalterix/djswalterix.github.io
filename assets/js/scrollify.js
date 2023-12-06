$(function () {
  $.scrollify({
    section: ".section",

    //setHeights: false, // Imposta su false se le altezze sono definite nel CSS
    scrollSpeed: 800,
    // updateHash: false, // Imposta su true se vuoi aggiornare l'hash URL durante lo scorrimento
  });
  $(".button").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $.scrollify.move(target);
  });
});
