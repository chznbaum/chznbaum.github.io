navDisplay();
bio.display();
portfolioDisplay();
footer.display();
$(document).ready(function() {
    // Scrollspy
    $('body').scrollspy({target: ".navbar", offset: 50});
    $('#mynavbar a').on('click', function(event) {
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
    // Contact form
    $('form').on('submit', function(e) {
        $('form').fadeOut(2000);
        $('#contact').append("Thank you! Your message has been sent.");
    });
});