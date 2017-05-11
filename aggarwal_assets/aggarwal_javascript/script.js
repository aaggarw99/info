var popup_status = false;

$(document).ready(function() {
  //User came from other domain or from direct
  if(document.referrer.split('/')[2]!=location.hostname){

  }else{
    //User came from another page on your site
  }
});
$(document).ready(function() {
  if(document.referrer.split('/')[2]!=location.hostname){
    setTimeout(function() {
          $('body').addClass('loaded');
      }, 2000);
      setTimeout(function() {
        $('.indexNav nav').slideDown(400).fadeIn(400);
      }, 2300);
  }else{
    $('body').addClass('loaded');
    $('.indexNav nav').slideDown(400).fadeIn(400);
  }


});

function show_popup() {
  var popup = document.getElementById("popup_modal");
  popup.style.visibility = "visible";
  popup_status = true;
}

function close_popup() {
  var popup = document.getElementById("popup_modal");
  popup.style.visibility = "hidden";
  popup_status = false;
}

$(document).on('mouseup', function (e)
{
    var popup = $("#popup_modal");
    var css_popup = document.getElementById("popup_modal");

     // Make sure neither the alert,
     // nor anything inside of it was clicked

    if (!popup.is(e.target)
        && popup.has(e.target).length === 0)
    {
        css_popup.style.visibility = "hidden";
        popup_status = false;
    }
});


function copy_to_clipboard() {
  var textArea = document.createElement("textarea");
// Place in top-left corner of screen regardless of scroll position.
textArea.style.position = 'fixed';
textArea.style.top = 0;
textArea.style.left = 0;
// Ensure it has a small width and height. Setting to 1px / 1em
// doesn't work as this gives a negative w/h on some browsers.
textArea.style.width = '2em';
textArea.style.height = '2em';
// We don't need padding, reducing the size if it does flash render.
textArea.style.padding = 0;
// Clean up any borders.
textArea.style.border = 'none';
textArea.style.outline = 'none';
textArea.style.boxShadow = 'none';
// Avoid flash of white box if rendered for any reason.
textArea.style.background = 'transparent';
textArea.value = "aaggarw99@gmail.com";

document.body.appendChild(textArea);

textArea.select();

try {
  var successful = document.execCommand('copy');
  var msg = successful ? 'successful' : 'unsuccessful';
  console.log('Copying text command was ' + msg);
} catch (err) {
  console.log('Oops, unable to copy');
}
