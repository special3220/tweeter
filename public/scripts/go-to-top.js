console.log("js file is connected")

$(document).ready(function() {
  const root = document.documentElement;
  const btn = $('#toTop')

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
  $('#toTop').on("click", scrollToTop)
})

