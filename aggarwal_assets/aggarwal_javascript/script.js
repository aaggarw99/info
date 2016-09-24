$(document).ready(function() {
  if(strpos($_SERVER['HTTP_REFERER'], $_SERVER['HTTP_HOST']) == false){
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
  }
});
