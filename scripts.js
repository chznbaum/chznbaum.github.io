var submitted = false;
document.addEventListener('DOMContentLoaded', function() {
  smoothScroll.init();
  var sendSubmit = document.getElementById('contact-form');
  var confirmation = document.getElementById('confirmation-message');
  sendSubmit.onsubmit = function(event) {
    sendSubmit.classList.remove('is-paused');
    confirmation.classList.remove('is-paused-in');
  }
});