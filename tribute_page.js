var helpTitle = 'Tribute Page Help';
modalText('#help', helpTitle, helpModal(HTMLhelpBox, 'tribute_page', 'tribute'));
navDisplay();
tributeSelectSetUp();
$('#help').append(HTMLhelpButton);
var tributeNumber = randomizer(quotes.speakers.length);
tributeSetUp(tributeNumber);
footer.display();
$(document).ready(function() {
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