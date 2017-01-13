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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
