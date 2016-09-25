$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
  });


// eventually add if statement whether coming from external link
// then have the slide in effect happen with a shorter delay.

$(document).ready(function(){
  setTimeout(function() {
    $("nav").slideDown(400).fadeIn(400);
  }, 2300);

});
