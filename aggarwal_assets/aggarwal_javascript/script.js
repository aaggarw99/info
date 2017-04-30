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

// Credit goes to https://codepen.io/quasimondo/pen/lDdrF
// gradient background
var colors = new Array(
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0],
  [62,35,255]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#grad').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,50);
