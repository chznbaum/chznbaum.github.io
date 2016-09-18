navDisplay();
bio.display();
var HTMLindexHelpButton = HTMLhelpButton.replace(/Need help\?/, "What am I like?");
$('#about p:last').append(HTMLindexHelpButton);
var helpTitle = 'Chazona Baum\'s Personal Portfolio';
var HTMLindexHelpBox = HTMLhelpBox.replace(/Frequently Asked Questions:/, "What Am I Really Like?")
modalText('#about', helpTitle, helpModal(HTMLindexHelpBox, 'index', 'index'));
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