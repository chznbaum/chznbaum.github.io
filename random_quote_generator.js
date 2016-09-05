navDisplay();
$("#quoteBox").append(HTMLquoteStart);
$("#quoteBox").append(HTMLquoteButtons);
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
    $("#btnNewQuote").on('click', function() {
        var citationIndex = randomizer(quotes.speakers.length);
        var quoteIndex = randomizer(quotes.speakers[citationIndex].quotes.length);
        var formatted = HTMLquoteItem.replace(/%quote%/g, quotes.speakers[citationIndex].quotes[quoteIndex]);
        formatted = formatted.replace(/%citation%/g, quotes.speakers[citationIndex].speaker);
        console.log(formatted);
        $("#quoteBlock").html(formatted);
        var quoteImage = CSSquoteImage.replace(/%imgurl%/g, quotes.speakers[citationIndex].image);
        console.log(quoteImage);
    });
});