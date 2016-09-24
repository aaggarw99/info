if(strpos($_SERVER['HTTP_REFERER'], $_SERVER['HTTP_HOST']) == false){
  $(document).ready(function() {
      setTimeout(function(){
          $('body').addClass('loaded');
      }, 2000);

  });
}
