$(function() {
  $(".calendar-season-title").click(function() {
    var $title = $(this);
    var $season = $title.next();
    var $arrow = $title.find(".calendar-season-title-arrow");

    var newArrow = $season.is(":visible") ? "&#9656;" : "&#9662;";
    $arrow.html(newArrow);
    $title.next().slideToggle();
  });
});
