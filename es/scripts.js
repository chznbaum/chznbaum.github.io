$(document).ready(function() {
    scrollSpy();
    var submitted=false;
    $("#contactform").on("submit", function(e) {
        $("#contactform *").fadeOut(2000);
        $("#contactform").prepend("Ha enviado su mensaje.");
    });
});