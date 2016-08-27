$(document).ready(function() {
    scrollSpy();
    var submitted = false;
function contactForm(message) {
    $("#contactform").on("submit", function(e) {
        $("#contactform *").fadeOut(2000);
        $("#contactform").prepend("Your message has been sent.");
    });
};
});