var popup_status = false;

$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 2000);
  });
$(document).ready(function() {
  setTimeout(function() {
    $('.indexNav nav').slideDown(400).fadeIn(400);
  }, 2300);

});

function show_popup() {
  var popup = document.getElementById("popup_modal");
  // popup.animate([
  // 		  // keyframes
  // 		  { visibility: 'hidden' },
  // 		  { visibility: 'visible' }
  // 			], {
  // 		  // timing options
  // 		  duration: 1000,
  // 			});
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

//
// *** This styling is an extra step which is likely not required. ***
//
// Why is it here? To ensure:
// 1. the element is able to have focus and selection.
// 2. if element was to flash render it has minimal visual impact.
// 3. less flakyness with selection and copying which **might** occur if
//    the textarea element is not visible.
//
// The likelihood is the element won't even render, not even a flash,
// so some of these are just precautions. However in IE the element
// is visible whilst the popup box asking the user for permission for
// the web page to copy to the clipboard.
//

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

document.body.removeChild(textArea);
}



// eventually add if statement whether coming from external link
// then have the slide in effect happen with a shorter delay.
