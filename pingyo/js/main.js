$( ".scroll_getstart" ).click(function(e) {
	e.preventDefault();
  $('html, body').animate({
      scrollTop: $("#sec7").offset().top
  }, 1000);
});
$( document ).ready(function() {
    setTimeout(function() { 
        $('.iframe_display').removeClass('iframe_display');
    }, 2000);
});

