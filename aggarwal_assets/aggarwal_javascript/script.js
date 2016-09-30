$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
  });



// eventually add if statement whether coming from external link
// then have the slide in effect happen with a shorter delay.

$(document).ready(function(){
  setTimeout(function() {
    $('.indexNav nav').slideDown(400).fadeIn(400);
  }, 2300);
});

// $(document).ready(function() {
//   setTimeout(function() {
//     $('#mathSticky').fadeIn(300);
//   }, 2100);
// });

// setTimeout(function() {
//   $('#athleticsSticky').fadeIn(400);
// }, 2200);
//
// setTimeout(function() {
//   $('#communitySticky').fadeIn(350);
// }, 2300);
//
// setTimeout(function() {
//   $('#scienceSticky').fadeIn(250);
// }, 2400);
//
// setTimeout(function() {
//   $('#vismedSticky').fadeIn(450);
// }, 2500);
//
// setTimeout(function() {
//   $('#appSticky').fadeIn(500);
// }, 2600);
