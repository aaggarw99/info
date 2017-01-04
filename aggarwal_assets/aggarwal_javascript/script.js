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

var modal = document.getElementById('modal_link');
var button = docuemnt.getElementById('button');
var close = document.getElementsByClassName("close")[0];

button.onclick  = function() {
  modal.style.display = "block";
}

close.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modal) {
    modal.style.display = "none";
  }
}
