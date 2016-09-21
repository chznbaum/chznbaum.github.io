var helpTitle = 'Wikipedia Viewer';
modalText('#home', helpTitle, helpModal(HTMLhelpBox, 'wikipedia_viewer', 'wikipedia'));
navDisplay();
$('#home').append(HTMLwikipediaStart);
$('#home').append(HTMLhelpButton);
$('#resultsBox').append(HTMLwikipediaResultsStart);
footer.display();
$(document).ready(function() {
    function wikipediaSearcher() {
        $('#showResults').html('');
        var searchQuery = document.getElementById('inputSearch').value.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;').replace(/"/, '&quot;').replace(/'/, '&#x27;').replace(/\//, '&#x2F');
        if (searchQuery === "") {
            $('#resultsBox').html(HTMLerrorNoSearch);
        } else {
            var formattedWikipediaString = HTMLwikipediaStr.replace(/%searchQuery%/g, searchQuery);
            $.getJSON(formattedWikipediaString, function(wikiData) {
                console.log(wikiData);
                var wikiArray = $.map(wikiData, function(i) {// Obtain appropriate array from JSON results
                    return i;
                });
                wikiArray = wikiArray[2].search;
                wikiArray = $.map(wikiArray, function(i) {
                    return i;
                });
                for (i = 0; i < wikiArray.length; i++) {
                    var wikiEncode = encodeURI(wikiArray[i].title);
                    var formattedWikiDescriptionList = HTMLwikiDescriptionList.replace(/%wikiEncode%/g, wikiEncode).replace(/%wikiTitle%/g, wikiArray[i].title).replace(/%wikiSnippet%/g, wikiArray[i].snippet);
                    $('#showResults').append(formattedWikiDescriptionList);
                }
            });
        }
    }
    $('#randomBtn').click(function(event) {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
    $('#resultsBtn').click(function(event) {
        wikipediaSearcher();
    });
});