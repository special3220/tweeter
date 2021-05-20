console.log("js file is connected");

$(document).ready(function() {
  const btn = $('#toTop');
// brining button to view based on scrolling down by adding/removing css class
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  function scrollToTop() {
    $('html, body').animate({scrollTop:0}, '400');
  }
  $('#toTop').on("click", scrollToTop);
});

