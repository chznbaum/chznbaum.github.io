$(document).ready(function() {
  $('body').scrollspy({ target: '#navbarSupportedContent' });
  $("#navbarSupportedContent a").on('click', function(event) {

    if (this.hash !== "") {
          event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
  $("#buttonHolder a").on('click', function(event) {

    if (this.hash !== "") {
          event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});