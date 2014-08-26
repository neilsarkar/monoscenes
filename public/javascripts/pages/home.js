$(function() {
  if( !$("body.home").length ) return;

  animate()

  function animate() {
    if( imagesLoaded < 2 ) { return setTimeout(animate, 100)}
    $(".js-overlay").animate({
      opacity: 1
    }, 5000, "easeInSine")
  }
})
