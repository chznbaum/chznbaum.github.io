var helpTitle = 'Tribute Page Help';
modalText('#quoteBox', helpTitle, helpModal(HTMLhelpBox, 'tribute_page', 'tribute'));
navDisplay();
tributeSelectSetUp();
var tributeNumber = randomizer(quotes.speakers.length);
tributeSetUp(tributeNumber);
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
    // Speakers button
    $('#btnSpeakerClick').click(function(event) {
        var selectedSpeaker;
        var speakerNum;
        selectedSpeaker = $('#tributeSelect option:selected').text();
        for (speaker in quotes.speakers) {
            if (quotes.speakers[speaker].speaker === selectedSpeaker) {
                speakerNum = speaker;
            }
        }
        tributeSetUp(speakerNum);
    });
});