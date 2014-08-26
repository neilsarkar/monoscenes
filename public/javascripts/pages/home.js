$(function() {
  if( !$("body.home").length ) return;

  $(".js-overlay").animate({
    opacity: 1
  }, 5000, "easeInSine")
})
