navDisplay();
$('#home').append(HTMLwikipediaStart);
$('#resultsBox').append(HTMLwikipediaResultsStart);
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
    $('#randomBtn').click(function(event) {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
    $('#resultsBtn').click(function(event) {
        var searchQuery = document.getElementById('inputSearch').value;
        // Call Wikipedia API and get list of results for search query
        $.ajax({
            url: '//www.wikipedia.org/w/api.php',
            data: { action: 'query', list: 'search', srsearch: searchQuery, srprop: "snippet", srlimit: 15, format: 'json' }, dataType: 'jsonp',
            success: function(xhr) {
                // Obtain array from JSON results
                var wikiArray = $.map(xhr, function(i) {
                    return i;
                });
                wikiArray = wikiArray[2].search;
                wikiArray = $.map(wikiArray, function(i) {
                    return i;
                });
                // Populate description list with titles with links and snippets from the array
                for (i = 0; i < wikiArray.length; i++) {
                    var wikiEncode = encodeURI(wikiArray[i].title);
                    $('#resultsBox').append('<dt><a href=https://en.wikipedia.org/wiki/' + wikiEncode + 'target="_blank">' + wikiArray[i].title + '</a></dt><dd>' + wikiArray[i].snippet + "...</dd>");
                }
            }
        });
    });
});